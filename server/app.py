#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api

# Add your model imports
from models import Plant, Location, Owner


# Views go here!

class Plants(Resource):
    def get(self):
        plant_list= [plant.to_dict() for plant in Plant.query.all()]
        return make_response(plant_list, 200)


api.add_resource(Plants, '/plants')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

