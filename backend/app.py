from flask import Flask
from flask_session import Session
from flask_cors import CORS
from os import getenv

app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
#app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key = getenv("SECRET_KEY")

session = Session(app)
cors = CORS(app, supports_credentials=True)

import routes

#if __name__ == '__main__':
#    app.run(debug = True)
