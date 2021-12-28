from app import app
from users_db import *

def create_editor():
    return create_user(0,6,6)

def create_admin():
    return create_user(1,8,8)

def create_super_admin():
    super_user = get_the_super_user()
    if super_user == None:
        return create_user(2,10,10)
    return None