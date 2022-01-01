from flask import request,jsonify,session
from werkzeug.datastructures import Authorization
from app import app
from users_db import *
from texts_db import *
from user_creation import *
from generator import *
from datetime import datetime, timedelta
from functools import wraps
import re
import json
import jwt

app.secret_key = getenv("SECRET_KEY")

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if "Authorization" in request.headers:
            token = request.headers["Authorization"]
        
        if not token:
            return jsonify({"status": "Token is missing"})
        
        token = token.split(' ')[1]
        authorization = True
    
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms="HS256")
            user = get_the_user(data["user_id"])
            if user == None:
                authorization = False
        except:
            return jsonify({"status": "Token is invalid"})
        
        return f(authorization, *args, **kwargs)

    return decorated

@app.route("/setup", methods = ['POST','GET'])
def setup():
    if request.method == 'GET':
        answer = create_rolename_user("Super admin")  
        return jsonify(**answer)

@app.route("/create", methods = ['POST','GET'])
@token_required
def create(authorization):
    if not authorization:
        return jsonify({"status": "No authorization"})

    if request.method == "POST":
        data = request.get_json()    
        rolename = data["rolename"]
        answer = create_rolename_user(rolename)   
        return jsonify(**answer)
        
@app.route("/signup", methods = ['POST','GET'])
def signup():
    if request.method == 'POST':
        data = request.get_json()
        code = data['code']
        username = data['username']
        password = data['password']
        
        data_pair = signup_user(code,username,password)
        answer = {"status": data_pair['status']}
        user = get_the_user(data_pair['user_id'])
        
        if not user == None:
            #session["token_key"] = token_key
            session["user_id"] = user["id"]
            session["role"] = user["role"]
            token = jwt.encode({"user_id": user["id"], "exp": datetime.utcnow() + timedelta(minutes = 30)}, app.config['SECRET_KEY'], algorithm="HS256")
            answer.update({"token": "UTF-8"})
        
        return jsonify(**answer)

@app.route("/login", methods = ['POST','GET'])
def login():
    if request.method == "POST":
        data = request.get_json()
        username = data['username']
        password = data['password']
        
        data_pair = login_user(username,password)
        answer = {"status": data_pair['status']}
        user = get_the_user(data_pair['user_id'])
        
        if not user == None:
            session["user_id"] = user["id"]
            session["role"] = user["role"]
            token = jwt.encode({"user_id": user["id"], "exp": datetime.utcnow() + timedelta(minutes = 30)}, app.config['SECRET_KEY'], algorithm="HS256")
            answer.update({"token": token})
        
        return jsonify(**answer)

@app.route("/load", methods = ['POST','GET'])
def load():
    if request.method == "POST":
        data = request.get_json()
        print(data)
        answer = load_text(data['user_id'],data['name'],data['content'])
        
        return jsonify(**answer)

