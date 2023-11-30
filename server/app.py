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
    
    def post(self):
        params= request.json
        try:
            new_plant= Plant(name= params['name'], image= params['image'], nickname= params['nickname'], water= params['water'], extra_info= params['extra_info'], size= params['size'], owner_id= params['owner_id'], location_id= params['location_id'])
        except ValueError as validation_error:
            return make_response({'error' : str(validation_error)}, 422)
        except KeyError as key_error:
            return make_response({'error' : f'A {key_error} must be included'}, 422)
        db.session.add(new_plant)
        db.session.commit()
        return make_response(new_plant.to_dict(), 201)


api.add_resource(Plants, '/plants')

class PlantById(Resource):
    def patch(self, id):
        plant= Plant.query.get(id)
        params= request.json
        if not plant:
            return make_response({'error' : "Plant not found"}, 404)
        for attr in params:
            try:
                setattr(plant, attr, params[attr])
            except ValueError as validation_error:
                return make_response({'error' : str(validation_error)}, 422)
        db.session.commit()
        return make_response(plant.to_dict(), 200)

    def delete(self, id):
        plant= Plant.query.get(id)
        if not plant:
            return make_response({'error' : "Plant not found"}, 404)
        db.session.delete(plant)
        db.session.commit()
        return make_response('', 204)

api.add_resource(PlantById, '/plants/<int:id>')


class Owners(Resource):
    def get(self):
        owner_list = [own.to_dict(only= ('name', "id")) for own in Owner.query.all()]
        return make_response(owner_list,200)

    def post(self):
        params= request.json
        owner = Owner(name= params['name'],)

        db.session.add(owner)
        db.session.commit()

        return make_response(owner.to_dict(), 201)
    
api.add_resource(Owners, '/users')

class Locations(Resource):
    def get(self):
        location_list = [loc.to_dict(only=("id", "room",)) for loc in Location.query.all()]
        return make_response(location_list, 200)
    
    def post(self):
        params = request.json
        location = Location(room = params['room'],)
        db.session.add(location)
        db.session.commit()

        return make_response(location.to_dict(), 201)

api.add_resource(Locations, "/locations")

class LocationById(Resource):
    def get(self, id): 
        loc = Location.query.get(id)
        if not loc:
            return make_response({"error": "Location not found"}, 404)
        return make_response(loc.to_dict(), 200)
    
    def patch(self, id):
        loc = Location.query.get(id)
        params= request.json
        if not loc:
            return make_response({'error' : "Location not found"}, 404)
        for attr in params:
            try:
                setattr(loc, attr, params[attr])
            except ValueError as validation_error:
                return make_response({'error' : str(validation_error)}, 422)
        db.session.commit()
        return make_response(loc.to_dict(), 200)
    
api.add_resource(LocationById, '/locations/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

