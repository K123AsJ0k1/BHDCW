from app import app
import random
import string

def generate(M, L):
    code = ""
    for i in range(1,M+1):
        piece = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(L))
        if (len(code) == 0):
            code = piece
            continue
        code = code + "-" + piece
    return code