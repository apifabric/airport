import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py



from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

# Define data models

class Airport(Base):
    """description: Table to store airport details."""
    __tablename__ = 'airports'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=True)

class Airline(Base):
    """description: Table to store airline details."""
    __tablename__ = 'airlines'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    code = Column(String, nullable=False)

class Flight(Base):
    """description: Table to store flight details."""
    __tablename__ = 'flights'
    id = Column(Integer, primary_key=True, autoincrement=True)
    number = Column(String, nullable=False)
    airline_id = Column(Integer, ForeignKey('airlines.id'))
    source_airport_id = Column(Integer, ForeignKey('airports.id'))
    destination_airport_id = Column(Integer, ForeignKey('airports.id'))
    departure_time = Column(DateTime, nullable=True)
    arrival_time = Column(DateTime, nullable=True)

class Passenger(Base):
    """description: Table to store passenger details."""
    __tablename__ = 'passengers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    full_name = Column(String, nullable=False)
    passport_number = Column(String, nullable=True)

class Booking(Base):
    """description: Table to store booking details."""
    __tablename__ = 'bookings'
    id = Column(Integer, primary_key=True, autoincrement=True)
    flight_id = Column(Integer, ForeignKey('flights.id'))
    passenger_id = Column(Integer, ForeignKey('passengers.id'))
    booking_date = Column(DateTime, default=datetime.datetime.utcnow)

class Crew(Base):
    """description: Table to store crew details."""
    __tablename__ = 'crews'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    position = Column(String, nullable=True)

class FlightCrew(Base):
    """description: Table to store flight crew assignments."""
    __tablename__ = 'flight_crews'
    id = Column(Integer, primary_key=True, autoincrement=True)
    flight_id = Column(Integer, ForeignKey('flights.id'))
    crew_id = Column(Integer, ForeignKey('crews.id'))

class Gate(Base):
    """description: Table to store gate details."""
    __tablename__ = 'gates'
    id = Column(Integer, primary_key=True, autoincrement=True)
    gate_number = Column(String, nullable=False)
    terminal = Column(String, nullable=True)

class CheckIn(Base):
    """description: Table to store check-in information."""
    __tablename__ = 'check_ins'
    id = Column(Integer, primary_key=True, autoincrement=True)
    passenger_id = Column(Integer, ForeignKey('passengers.id'))
    flight_id = Column(Integer, ForeignKey('flights.id'))
    check_in_time = Column(DateTime, nullable=True)

class Baggage(Base):
    """description: Table to store baggage details."""
    __tablename__ = 'baggages'
    id = Column(Integer, primary_key=True, autoincrement=True)
    booking_id = Column(Integer, ForeignKey('bookings.id'))
    weight = Column(Float, nullable=True)

class Maintenance(Base):
    """description: Table to store maintenance records."""
    __tablename__ = 'maintenances'
    id = Column(Integer, primary_key=True, autoincrement=True)
    flight_id = Column(Integer, ForeignKey('flights.id'))
    date = Column(DateTime, nullable=False)
    description = Column(String, nullable=True)

class Delay(Base):
    """description: Table to store flight delay information."""
    __tablename__ = 'delays'
    id = Column(Integer, primary_key=True, autoincrement=True)
    flight_id = Column(Integer, ForeignKey('flights.id'))
    delay_duration = Column(Integer, nullable=True)  # in minutes
    reason = Column(String, nullable=True)

# Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')

# Create all tables
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
session.add_all([
    Airport(name="JFK International", location="New York"),
    Airport(name="LAX", location="Los Angeles"),
    Airline(name="Delta Airlines", code="DL"),
    Airline(name="American Airlines", code="AA"),
    Flight(number="DL123", airline_id=1, source_airport_id=1, destination_airport_id=2, departure_time=datetime.datetime(2023, 11, 1, 15, 0), arrival_time=datetime.datetime(2023, 11, 1, 18, 0)),
    Passenger(full_name="John Doe", passport_number="AB1234567"),
    Booking(flight_id=1, passenger_id=1, booking_date=datetime.datetime(2023, 10, 25, 14, 0)),
    Crew(name="Alice Johnson", position="Pilot"),
    FlightCrew(flight_id=1, crew_id=1),
    Gate(gate_number="A3", terminal="T1"),
    CheckIn(passenger_id=1, flight_id=1, check_in_time=datetime.datetime(2023, 11, 1, 12, 0)),
    Baggage(booking_id=1, weight=23.5),
    Maintenance(flight_id=1, date=datetime.datetime(2023, 11, 1), description="Routine check"),
    Delay(flight_id=1, delay_duration=30, reason="Weather conditions")
])

session.commit()
session.close()
