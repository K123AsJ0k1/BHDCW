from app import app
from users_db import *

def create_rolename_user(rolename):
    if rolename == "Editor":
        return create_user(0,6,6)
    
    if rolename == "Admin":
        return create_user(1,8,8)
    
    if rolename == "Super admin":
        super_user = get_the_super_user()
        if super_user == None:
            return create_user(2,10,10)
        return {"status": "Super user already exists", "code": None}
    
    return {"status": "Incorrect rolename", "code": None}
