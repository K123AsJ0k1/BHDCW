from app import app
from db import *

def load_text(user_id, text_id, content):
    try:
        sql = "SELECT date FROM texts WHERE id=:text_id"
        result = db.session.execute(sql, {"text_id": text_id})
        query = result.fetchone()

        if not query == None:
            return -1

        sql = "INSERT INTO texts (user_id, text_id, content) VALUES (:user_id,:text_id,:content)"
        db.session.execute(sql, {"user_id":user_id, "text_id":text_id, "content":content})
        db.session.commit()
        return 1
    except Exception as e:
        print(e)
        return 0
