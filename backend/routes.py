from flask import request
from app import app
from users_db import *
import re
import json

@app.route("/signup", methods = ['POST','GET'])
def signup():
    if request.method == 'POST':
        content = request.get_json()
        
        code = content['code']
        username = content['username']
        password = content['password']
        role = 0
        
        status = signup_user(code,username,password,role)
        
        if (status == 0):
            return json.dumps({"Status": "Database error"})
        if (status == -1):
            return json.dumps({"Status": "User already exists"})
        if (status == -2): 
            return json.dumps({"Status": "The given code is wrong"})
        if (status == -3):
            return json.dumps({"Status": "The user is already active"})

        return json.dumps({"Status": "Complete"})

@app.route("/login", methods = ['POST','GET'])
def login():
    if request.method == "POST":
        content = request.get_json()

        username = content['username']
        password = content['password']

        status = login_user(username,password)
        
        if (status == 0):
            return json.dumps({"Status": "Database error"})
        if (status == -1):
            return json.dumps({"Status": "User does not exist"})
        if (status == -2):
            return json.dumps({"Status": "Password is incorrect"})

        return json.dumps({"Status": "Success"})

@app.route("/load", methods = ['POST','GET'])
def load():
    if request.method == "POST":
        content = request.get_json()

        text = content['text']

        print(text)

        return json.dumps({"Status": "Success"})

