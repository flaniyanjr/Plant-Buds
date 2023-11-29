from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db

class Owner(db.Model, SerializerMixin):
    __tablename__ = 'owners'

    serialize_rules= ('-plants.owner',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    plants= db.relationship('Plant', back_populates= 'owner', cascade= 'all, delete-orphan')

    locations= association_proxy('plants', 'location')

    @validates('name')
    def validate_owner_name(self, key, name):
        if not name:
            raise ValueError('Owner must have a name')
        if type(name) != str:
            raise ValueError('Name must be a string')
        return name
    
    def __repr__(self):
        return f'<Owner id: {self.id} Name: {self.name}>'


class Location(db.Model, SerializerMixin):
    __tablename__ = 'locations'

    serialize_rules= ('-plants.location',)

    id = db.Column(db.Integer, primary_key=True)
    room= db.Column(db.String)

    plants= db.relationship('Plant', back_populates= 'location', cascade= 'all, delete-orphan')

    owners= association_proxy('plants', 'owner')

    @validates('room')
    def validate_room(self, key, room):
        if not room:
            raise ValueError('A room must be included')
        if type(room) != str:
            raise ValueError('Room must be a string')
        return room
    
    def __repr__(self):
        return f'<Location id: {self.id} Room: {self.room}>'

class Plant(db.Model, SerializerMixin):
    __tablename__ = 'plants'

    serialize_rules= ('-owner.plants', '-location.plants')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image= db.Column(db.String)
    nickname= db.Column(db.String)
    water= db.Column(db.String)
    extra_info= db.Column(db.String)
    size= db.Column(db.String)
    owner_id= db.Column(db.Integer, db.ForeignKey('owners.id'))
    location_id= db.Column(db.Integer, db.ForeignKey('locations.id'))

    owner= db.relationship('Owner', back_populates= 'plants')
    location= db.relationship('Location', back_populates= 'plants')

    @validates('name')
    def validate_plant_name(self, key, name):
        if not name:
            raise ValueError('Plant must have a name')
        elif type(name) != str:
            raise ValueError('Room must be a string')
        elif len(name) < 1:
            raise ValueError('Name must be at least 1 character long')
        return name
    
    @validates('image')
    def validate_plant_image(self, key, image):
        if not image:
            raise ValueError('Plant must have an image')
        if type(image) != str:
            raise ValueError('Image must be a string')
        return image
    
    @validates('nickname')
    def validate_nickname(self, key, nickname):
        if type(nickname) != str:
            raise ValueError('Nickname must be a string')
        return nickname
    
    @validates('water')
    def validate_water(self, key, water):
        if type(water) != str:
            raise ValueError('Watering istructions must be a string')
        return water
    
    @validates('extra_info')
    def validate_info(self, key, info):
        if type(info) != str:
            raise ValueError('Info must be a string')
        return info
    
    @validates('size')
    def validate_size(self, key, size):
        if type(size) != str:
            raise ValueError('Size must be a string')
        return size

    @validates('owner_id')
    def validate_owner_id(self, key, owner_id):
        id_list= [owner.id for owner in Owner.query.all()]
        if type(owner_id) != int:
            raise ValueError('Owner id must be an integer')
        elif owner_id not in id_list:
            raise ValueError('Owner id must be an existing instance of the Owner class')
        return owner_id
    
    @validates('location_id')
    def validate_location_id(self, key, location_id):
        id_list= [location.id for location in Location.query.all()]
        if type(location_id) != int:
            raise ValueError('Location id must be an integer')
        elif location_id not in id_list:
            raise ValueError('Location id must be an existing instance of the Owner class')
        return location_id
        
    @validates('owner')
    def validate_owner(self, key, owner):
        if not isinstance(owner, Owner):
            raise ValueError('Owner must be an existing instance of the Owner class')
        return owner
    
    @validates('location')
    def validate_location(self, key, location):
        if not isinstance (location, Location):
            raise ValueError('Location must be an existing instance of the Location class')
        return location