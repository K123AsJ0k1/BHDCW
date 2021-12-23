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
            return -1

        sql = "SELECT id,active FROM users WHERE code=:code"
        result = db.session.execute(sql, {"code":code})
        user = result.fetchone()
    
        if user == None:
            return -2

        if user[1]:
            return -3

        hash_value = generate_password_hash(password)
        date = datetime.datetime.now()
        sql = "UPDATE users SET active=:active, username=:username, password=:password, role=:role, date=:date, last_login=:last_login WHERE id=:id"
        db.session.execute(sql, {"id":user[0], "active":'true', "username": username, "password": hash_value, "role": role, "date": date, "last_login": date})
        db.session.commit()

        return 1
    except Exception as e:
        print(e)
        return 0

def login_user(username,password):
    try:
        sql = "SELECT password FROM users WHERE username=:username"
        result = db.session.execute(sql, {"username":username})
        user_password = result.fetchone()

        if user_password == None:
            return -1
        
        hash_value = user_password[0]
        if not check_password_hash(hash_value,password):
           return -2

        return 1
    except Exception as e:
        print(e)
        return 0