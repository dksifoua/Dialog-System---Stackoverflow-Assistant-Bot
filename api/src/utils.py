import re
import pickle
import numpy as np

import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords

def text_prepare(text):
    """Performs tokenization and simple preprocessing."""

    replace_by_space_re = re.compile('[/(){}\[\]\|@,;]')
    bad_symbols_re = re.compile('[^0-9a-z #+_]')
    stopwords_set = set(stopwords.words('english'))

    text = text.lower()
    text = replace_by_space_re.sub(' ', text)
    text = bad_symbols_re.sub('', text)
    text = ' '.join([x for x in text.split() if x and x not in stopwords_set])

    return text.strip()

def load(filepath):
    with open(filepath, 'rb') as f:
        return pickle.load(f)
    raise Exception(f'file {filepath} not found!')