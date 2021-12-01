from flask import Flask
from flask import render_template
import flask
from flask.scaffold import F 
import pandas as pd


app= Flask(__name__)
df=pd.read_csv('dataset/RDWClustered.csv')



@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template("index.html")

@app.route('/license/<License>', methods=['GET', 'POST'])
def getCar(License):
  
  car= df[['European_vehicle_category','Fuel_consumption_combined','CO2_emissions_combined','soorted_cluster']].loc[(df['License_plate']==License)]
 
  if car.empty == True:
    return ('', 204)
  else:

    return car.to_json(orient='split',index=False)

