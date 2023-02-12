from flask import Flask, request
import sus

app = Flask(__name__)

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
  return 'Hello from Flask!'



#GET REQUEST

@app.route('/readHello')
def getRequestHello():
    return "Hi, I got your GET Request!"

#POST REQUEST
@app.route('/createHello', methods = ['POST'])
def postRequestHello():
    return "I see you sent a POST message :-)"
#UPDATE REQUEST
@app.route('/updateHello', methods = ['PUT'])
def updateRequestHello():
    return "Sending Hello on an PUT request!"

#DELETE REQUEST
@app.route('/deleteHello', methods = ['DELETE'])
def deleteRequestHello():
    return "Deleting your hard drive.....haha just kidding! I received a     DELETE request!"

if __name__ == "__main__":
    app.run(debug=True)
