from flask import request
from app import app
from users_db import *
import re
import json

@app.route("/", methods = ['POST','GET'])
def root():
    return "Hello world"

@app.route("/activate_user", methods = ['POST','GET'])
def activate_user():
    if request.method == 'POST':
        print("print")
        content = request.get_json()
        print(content)
        return json.dumps({"Done": "ssad"})

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