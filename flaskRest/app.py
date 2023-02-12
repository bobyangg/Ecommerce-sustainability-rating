from flask import Flask, request, jsonify
from flask_cors import CORS
import sus

app = Flask(__name__)
CORS(app, origins=["chrome-extension://accegjihngkccapajfemlidgmhojghce"])

@app.after_request
def after_request(response):
    
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    
    return response

@app.route("/api/sus", methods=["POST"])
def process():
    # Get the data from the request
    data = request.get_json()
    string_data = data["data"]
    print("Received data: ", string_data)

    # Do something with the data, for example, return two numerical values
    sus_score = sus.susCheck(string_data)
    return jsonify(sus_score)

if __name__ == "__main__":
    app.run(debug=True)


@app.route('/')
def index():
  return 'Hello from Flask! You have landed on the homepage'


if __name__ == "__main__":
    app.run(debug=True)
