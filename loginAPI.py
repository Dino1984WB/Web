#Making a website backend REST API with Python, Flask
#Author | William Bukowski
from flask import Flask, render_template, request
from flask_restful import Api, Resource
from flask import Flask-Login
  
app =   Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])
def login():
    #return render_template('login.html')
    return 0


#runs when you run this file
if __name__ == "__main__": 
    app.run()