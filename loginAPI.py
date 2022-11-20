#Making a website backend REST API with Python, Flask
#Author | William Bukowski
from flask import Flask, render_template, request
from flask_restful import Api, Resource
  
app =   Flask(__name__)

@app.route('/login', methods=['POST'])
def form():
    return render_template('login.html')


#runs when you frun this file
if __name__ == "__main__": 
    app.run()