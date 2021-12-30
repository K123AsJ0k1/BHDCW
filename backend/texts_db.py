from app import app
from db import *
from users_db import *
import datetime

def load_text(user_id, name, content):
    try:
        user = get_the_user(user_id)

        if user == None:
            return {"status": "Submitter does not exist"}
        
        sql = "SELECT id FROM texts WHERE name=:name"
        result = db.session.execute(sql, {"name":name})
        query = result.fetchone()

        if not query == None:
            return {"status": "Given name already exists"}
        
        creation_date = datetime.datetime.now()
        sql = "INSERT INTO texts (user_id, name, content, creation_date) VALUES (:user_id,:name,:content,:creation_date)"
        db.session.execute(sql, {"user_id":user_id, "name": name, "content":content, "creation_date":creation_date})
        db.session.commit()
        
        return {"status": "Text has been loaded"}
    except Exception as e:
        print(e)
        return {"status": "Database error"}
