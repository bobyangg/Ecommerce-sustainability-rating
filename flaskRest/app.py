from flask import Flask, request, jsonify
import sus

app = Flask(__name__)

@app.route("/api/sus", methods=["POST"])
def process():
    # Get the data from the request
    data = request.get_json()
    string_data = data["data"]
    print("Received data: ", string_data)

    # Do something with the data, for example, return two numerical values
    num1 = 42
    num2 = 123

    # Return the numerical values in a JSON response
    response = {
        "num1": num1,
        "num2": num2
    }
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)

@app.route("/sus", methods=["GET","POST"])
def check_sus_score():
    if request.method == 'POST':
        input_string = request.data.decode("utf-8")
    elif request.method == 'GET':
        input_string = request.args.get('input')
    if len(input_string) > 100:
        return "Error: input string length exceeds 100 characters", 400
    sus_score = sus.susCheck(input_string)
    return str(sus_score)

@app.route('/')
def index():
  return 'Hello from Flask! You have landed on the homepage'


if __name__ == "__main__":
    app.run(debug=True)
