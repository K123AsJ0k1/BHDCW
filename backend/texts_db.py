from app import app
from db import *

def load_text(text):
    try:
        return 1
    except Exception as e:
        print(e)
        return 0
