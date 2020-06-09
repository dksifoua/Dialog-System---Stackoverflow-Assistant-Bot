from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['GET'])
@cross_origin()
def index():
    return "Hi! I'm a bot. What's up?"

@app.route('/response', methods=['POST'])
@cross_origin()
def response():
    question = request.form['question']
    return f"Message: {question}"

