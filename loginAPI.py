#Making a website backend REST API with Python, Flask
#Author | William Bukowski
from flask import Flask, render_template, request


loginApp = Flask(__name__)

@loginApp.route('/', methods=['POST'])
def form():
    return render_template('login.html')

if __name__ == "__main__":
    loginApp.run()