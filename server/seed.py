#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Owner, Location, Plant

def create_seed_data():
    owner1 = Owner(name = 'Jane Doe')
    owner2 = Owner(name = 'John Doe')

    db.session.add_all([owner1, owner2])
    db.session.commit()

    location1 = Location(name="Living Room")
    location2 = Location(name="Bedroom")
    

    db.session.add_all([location1, location2])
    db.session.commit()

    plant1 = Plant(
        name="Spider Plant",
        image="https://i.insider.com/60233c80cca90200129b75e1?width=1000&format=jpeg&auto=webp",
        nickname="Spidey",
        water="Keep soil evenly moist, water moderately.",
        extra_info = "",
        size= 'Small',
        owner=owner1,
        location= location1 ,
    )

    plant2 = Plant(
        name="Aloe Vera",
        image="https://cdn.webshopapp.com/shops/30495/files/437716140/aloe-aloe-barbadensis-aloe-vera-set-of-3-houseplan.jpg",
        nickname="Vera",
        water="Water when soil dries out",
        extra_info="",
        size="Small",
        owner=owner2,
        location=location2,
    )

    plant3 = Plant(
        name="Peace Lily",
        image="https://www.dahingplants.com/cdn/shop/products/Canon_EOS_80D-_top_left-593026004158-9379-20210924-101922_1800x1800.jpg?v=1634916928",
        nickname="",
        water="Every other day",
        extra_info="Droopy when needs watered.",
        size="Medium",
        owner=owner1,
        location=location1,
    )

    db.session.add_all([plant1, plant2, plant3])
    db.session.commit()




if __name__ == '__main__':
    
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
