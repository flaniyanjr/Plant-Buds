from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class Owner(db.Model, SerializerMixin):
    __tablename__ = 'owners'

    serialize_rules= ('-plants.owner',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    plants= db.relationship('Plant', back_populates= 'owner', cascade= 'all, delete-orphan')

    plant_types= association_proxy('plants', 'plant_type')

class PlantType(db.Model, SerializerMixin):
    __tablename__ = 'plant_types'

    serialize_rules= ('-plants.plant_type',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    plants= db.relationship('Plant', back_populates= 'plant_type', cascade= 'all, delete-orphan')

    owners= association_proxy('plants', 'owner')

class Plant(db.Model, SerializerMixin):
    __tablename__ = 'plants'

    serialize_rules= ('-owner.plants', '-plant_type.plants')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image= db.Column(db.String)
    light= db.Column(db.String)
    water= db.Column(db.String)
    temperature= db.Column(db.String)
    toxicity= db.Column(db.String)
    owner_id= db.Column(db.Integer, db.ForeignKey('users.id'))
    plant_type_id= db.Column(db.Integer, db.ForeignKey('plant_types.id'))

    owner= db.relationship('User', back_populates= 'plants')
    plant_type= db.relationship('PlantType', back_populates= 'plants')

