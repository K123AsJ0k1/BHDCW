from app import app
from db import *
from code_generator import *
from werkzeug.security import check_password_hash, generate_password_hash
import datetime

def create_user():
    try:
        sql = "INSERT INTO users (code,active) VALUES (:code,:active)"
        db.session.execute(sql, {"code": generate(5,5), "active": '0'})
        db.session.commit()
        return True
    except Exception as e:
        print(e)
        return False

def signup_user(code,username,password,role):
    try:
        sql = "SELECT id FROM users WHERE username=:username"
        result = db.session.execute(sql, {"username":username})
        query = result.fetchone()

        if not query == None:
            return {"status": -1, "user_id": 0}

        sql = "SELECT id,active FROM users WHERE code=:code"
        result = db.session.execute(sql, {"code":code})
        user_pair = result.fetchone()
    
        if user_pair == None:
            return {"status": -2, "user_id": 0}

        if user_pair[1]:
            return {"status": -3, "user_id": 0}

        hash_value = generate_password_hash(password)
        date = datetime.datetime.now()
        sql = "UPDATE users SET active=:active, username=:username, password=:password, role=:role, date=:date, last_login=:last_login WHERE id=:id"
        db.session.execute(sql, {"id":user_pair[0], "active":'true', "username": username, "password": hash_value, "role": role, "date": date, "last_login": date})
        db.session.commit()

        return {"status": 1, "user_id": user_pair[0]}
    except Exception as e:
        print(e)
        return {"status": 0, "user_id": 0}

def login_user(username,password):
    try:
        sql = "SELECT id,password FROM users WHERE username=:username"
        result = db.session.execute(sql, {"username":username})
        user_pair = result.fetchone()

        if user_pair == None:
            return {"status": -1, "user_id": 0}
        
        hash_value = user_pair[1]
        if not check_password_hash(hash_value,password):
           return {"status": -2, "user_id": 0}

        return {"status": 1, "user_id": user_pair[0]}
    except Exception as e:
        print(e)
        return {"status": 0, "user_id": 0}

def get_the_user(user_id):
    try:
        sql = "SELECT id,username,role,date,last_login,misc FROM users WHERE id=:user_id"
        result = db.session.execute(sql, {"user_id":user_id})
        user = result.fetchone()
        return user
    except Exception as e:
        print(e)
        return None    