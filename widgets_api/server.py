from flask import Flask, request, jsonify
from translate import Translator
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
port = int(os.environ.get("PORT", 5000))

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

app.run(host='0.0.0.0', port=port, debug=True)