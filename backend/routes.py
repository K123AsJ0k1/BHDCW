from flask import request,jsonify
from app import app
from users_db import *
from texts_db import *
import re
import json

@app.route("/signup", methods = ['POST','GET'])
def signup():
    if request.method == 'POST':
        data = request.get_json()
        
        code = data['code']
        username = data['username']
        password = data['password']
        role = 0
        
        data_pair = signup_user(code,username,password,role)
        
        answer = {"status": data_pair['status']}
        user = get_the_user(data_pair['user_id'])
        if not user == None:
            answer.update(get_the_user(data_pair['user_id']))
        
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
            answer.update(get_the_user(data_pair['user_id']))
        
        return jsonify(**answer)

@app.route("/load", methods = ['POST','GET'])
def load():
    if request.method == "POST":
        data = request.get_json()
        
        user_id = 0
        text_id = 0
        content = data['text']
        
        #status = load_text()

        return json.dumps({"Status": "Success"})

