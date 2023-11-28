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
        if type(name) != str:
            raise ValueError('Name must be a string')
        return name


class Location(db.Model, SerializerMixin):
    __tablename__ = 'locations'

    serialize_rules= ('-plants.location',)

    id = db.Column(db.Integer, primary_key=True)
    room= db.Column(db.String)

    plants= db.relationship('Plant', back_populates= 'location', cascade= 'all, delete-orphan')

    owners= association_proxy('plants', 'owner')

    @validates('room')
    def validate_room(self, key, room):
        if type(room) != str:
            raise ValueError('Room must be a string')
        return room

class Plant(db.Model, SerializerMixin):
    __tablename__ = 'plants'

    serialize_rules= ('-owner.plants', '-location.plants')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image= db.Column(db.String)
    nickname= db.Column(db.String)
    water= db.Column(db.String)
    extra_info= db.Column(db.String)
    size= db.Column(db.Integer)
    owner_id= db.Column(db.Integer, db.ForeignKey('owners.id'))
    location_id= db.Column(db.Integer, db.ForeignKey('locations.id'))

    owner= db.relationship('User', back_populates= 'plants')
    location= db.relationship('Location', back_populates= 'plants')

