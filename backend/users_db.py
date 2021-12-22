from app import app
from db import *
from code_generator import *
from werkzeug.security import check_password_hash, generate_password_hash

def create_user():
    try:
        print("Luodaan käyttäjä")
        sql = "INSERT INTO users (code,active) VALUES (:code,:active)"
        db.session.execute(sql, {"code": generate(5,5), "active": '0'})
        db.session.commit()
        return True
    except Exception as e:
        print(e)
        return False