from flask import Flask, request
from flask_cors import CORS, cross_origin

from src.dialogue_manager import SimpleDialogueManager

dialogue_manager = SimpleDialogueManager.get_instance()

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
    response = dialogue_manager.generate_answer(question)
    return response