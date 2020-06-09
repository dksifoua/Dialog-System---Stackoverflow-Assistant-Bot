import os
from src.singleton import SingletonMixin
from src.utils import *


class SimpleDialogueManager(SingletonMixin):

    def __init__(self):
        super().__init__()
        self.vectorizer = load(os.environ.get('TFIDF_VECTORIZER'))
        self.intent_recognizer = load(os.environ.get('INTENT_RECOGNIZER'))
        self.tag_classifier = load(os.environ.get('TAG_CLASSIFIER'))

    def generate_answer(self, question: str):
        prepared_question = text_prepare(question)
        features = self.vectorizer.transform([prepared_question])
        intent = self.intent_recognizer.predict(features)[0]
        if intent == 1:
            tag = self.tag_classifier.predict(features)[0]
            return f"Tag: {tag}"
        else:
            return f"Message: {question}"