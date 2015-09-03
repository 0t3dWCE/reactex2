from flask import Flask, request, send_from_directory
import json
import os
import requests

LORIPSUM_API_URL = "http://loripsum.net/api/1/short/plaintext"

app = Flask(__name__)

root = os.path.join("my_app")

@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
    return send_from_directory(root, path)

@app.route('/', methods=['GET'])
def redirect_to_index():
    return send_from_directory(root, 'index.html')

@app.route("/loripsum", methods=["GET"])
def getlor_job():
    r = requests.get(LORIPSUM_API_URL)
    return r.text	

@app.route("/stat", methods=["POST"])
def strange_job():
    # get url
    data = json.loads(request.data)
    url = data["url"]
    res = [l+"W" for l in url]
    return json.dumps(res)

if __name__ == "__main__":
    app.run(host="localhost", debug = True)