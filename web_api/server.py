from flask import Flask, request, jsonify
from translate import Translator
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/translate', methods=['POST', 'GET'])
def translate():
	if request.method == 'POST':
		print('*'*80)
		data = request.get_json()
		print(type(data))
		translator= Translator(to_lang=data['language'])
		translation = translator.translate(data['text'])
		return jsonify({"translation": translation})
	else:
		return 'something went wrong. Try again!'