from flask import request,jsonify,session
from app import app
from users_db import *
from texts_db import *
from user_creation import *
from generator import *
import re
import json
import jwt

app.secret_key = getenv("SECRET_KEY")

@app.route("/setup", methods = ['POST','GET'])
def setup():
    if request.method == 'GET':
        answer = create_rolename_user("Super admin")  
        return jsonify(**answer)

@app.route("/create", methods = ['POST','GET'])
def create():
    if request.method == "POST":
        data = request.get_json()
        rolename = data["rolename"]
        answer = create_rolename_user(rolename)   
        return jsonify(**answer)
        
@app.route("/signup", methods = ['POST','GET'])
def signup():
    if request.method == 'POST':
        data = request.get_json()
        token = generate_token()
        code = data['code']
        username = data['username']
        password = data['password']
        
        data_pair = signup_user(code,username,password)
        answer = {"status": data_pair['status']}
        user = get_the_user(data_pair['user_id'])
        
        if not user == None:
            session["token"] = token
            session["user_id"] = user["id"]
            session["username"] = user["username"]
            session["role"] = user["role"]
            answer.update({"token": token})
            answer.update(user)
        
        return jsonify(**answer)

@app.route("/login", methods = ['POST','GET'])
def login():
    if request.method == "POST":
        data = request.get_json()
        token = generate_token()
        username = data['username']
        password = data['password']
        
        data_pair = login_user(username,password)
        answer = {"status": data_pair['status']}
        user = get_the_user(data_pair['user_id'])
        
        if not user == None:
            session["token"] = token
            session["user_id"] = user["id"]
            session["username"] = user["username"]
            session["role"] = user["role"]
            answer.update({"token": token})
            answer.update(user)
        
        return jsonify(**answer)

@app.route("/load", methods = ['POST','GET'])
def load():
    if request.method == "POST":
        data = request.get_json()
        print(data)
        answer = load_text(data['user_id'],data['name'],data['content'])
        
        return jsonify(**answer)

