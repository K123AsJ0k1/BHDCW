from flask import request
from app import app
from users_db import *
import re
import json

@app.route("/", methods = ['POST','GET'])
def root():
    return "Hello world"

@app.route("/activate_user", methods = ['POST','GET'])
def activate():
    if request.method == 'POST':
        content = request.get_json()
        
        code = content['code']
        username = content['username']
        password = content['password']
        role = 0
        
        status = activate_user(code,username,password,role)
        
        print(status)
        if (status == 0):
            return json.dumps({"Status": "Database error"})
        if (status == -1):
            return json.dumps({"Status": "User already exists"})
        if (status == -2): 
            return json.dumps({"Status": "The given code is wrong"})
        if (status == -3):
            return json.dumps({"Status": "The user is already active"})

        return json.dumps({"Status": "Complete"})

@app.route("/create_user", methods = ['POST'])
def create():
    print("Routes")
    create_user()
    print("Luotu")
    return 'Done', 201

@app.route("/result", methods = ['GET','POST'])
def result():
    if request.method == 'GET':
        place = request.args.get('place', None)
        if place:
            return place
        return "No info was given"

@app.route("/profile")
def my_profile():
    response_body = {
        "name" : "Niila",
        "about" : "Hello!"
    }
    return response_body