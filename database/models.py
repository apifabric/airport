# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 10, 2024 10:24:14
# Database: sqlite:////tmp/tmp.uv6M0srHb4/airport/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Airline(SAFRSBaseX, Base):
    """
    description: Table to store airline details.
    """
    __tablename__ = 'airlines'
    _s_collection_name = 'Airline'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    code = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    FlightList : Mapped[List["Flight"]] = relationship(back_populates="airline")



class Airport(SAFRSBaseX, Base):
    """
    description: Table to store airport details.
    """
    __tablename__ = 'airports'
    _s_collection_name = 'Airport'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    FlightList : Mapped[List["Flight"]] = relationship(foreign_keys='[Flight.destination_airport_id]', back_populates="destination_airport")
    sourceFlightList : Mapped[List["Flight"]] = relationship(foreign_keys='[Flight.source_airport_id]', back_populates="source_airport")



class Crew(SAFRSBaseX, Base):
    """
    description: Table to store crew details.
    """
    __tablename__ = 'crews'
    _s_collection_name = 'Crew'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    position = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    FlightCrewList : Mapped[List["FlightCrew"]] = relationship(back_populates="crew")



class Gate(SAFRSBaseX, Base):
    """
    description: Table to store gate details.
    """
    __tablename__ = 'gates'
    _s_collection_name = 'Gate'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    gate_number = Column(String, nullable=False)
    terminal = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)



class Passenger(SAFRSBaseX, Base):
    """
    description: Table to store passenger details.
    """
    __tablename__ = 'passengers'
    _s_collection_name = 'Passenger'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    full_name = Column(String, nullable=False)
    passport_number = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    BookingList : Mapped[List["Booking"]] = relationship(back_populates="passenger")
    CheckInList : Mapped[List["CheckIn"]] = relationship(back_populates="passenger")



class Flight(SAFRSBaseX, Base):
    """
    description: Table to store flight details.
    """
    __tablename__ = 'flights'
    _s_collection_name = 'Flight'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    number = Column(String, nullable=False)
    airline_id = Column(ForeignKey('airlines.id'))
    source_airport_id = Column(ForeignKey('airports.id'))
    destination_airport_id = Column(ForeignKey('airports.id'))
    departure_time = Column(DateTime)
    arrival_time = Column(DateTime)

    # parent relationships (access parent)
    airline : Mapped["Airline"] = relationship(back_populates=("FlightList"))
    destination_airport : Mapped["Airport"] = relationship(foreign_keys='[Flight.destination_airport_id]', back_populates=("FlightList"))
    source_airport : Mapped["Airport"] = relationship(foreign_keys='[Flight.source_airport_id]', back_populates=("sourceFlightList"))

    # child relationships (access children)
    BookingList : Mapped[List["Booking"]] = relationship(back_populates="flight")
    CheckInList : Mapped[List["CheckIn"]] = relationship(back_populates="flight")
    DelayList : Mapped[List["Delay"]] = relationship(back_populates="flight")
    FlightCrewList : Mapped[List["FlightCrew"]] = relationship(back_populates="flight")
    MaintenanceList : Mapped[List["Maintenance"]] = relationship(back_populates="flight")



class Booking(SAFRSBaseX, Base):
    """
    description: Table to store booking details.
    """
    __tablename__ = 'bookings'
    _s_collection_name = 'Booking'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    flight_id = Column(ForeignKey('flights.id'))
    passenger_id = Column(ForeignKey('passengers.id'))
    booking_date = Column(DateTime)

    # parent relationships (access parent)
    flight : Mapped["Flight"] = relationship(back_populates=("BookingList"))
    passenger : Mapped["Passenger"] = relationship(back_populates=("BookingList"))

    # child relationships (access children)
    BaggageList : Mapped[List["Baggage"]] = relationship(back_populates="booking")



class CheckIn(SAFRSBaseX, Base):
    """
    description: Table to store check-in information.
    """
    __tablename__ = 'check_ins'
    _s_collection_name = 'CheckIn'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    passenger_id = Column(ForeignKey('passengers.id'))
    flight_id = Column(ForeignKey('flights.id'))
    check_in_time = Column(DateTime)

    # parent relationships (access parent)
    flight : Mapped["Flight"] = relationship(back_populates=("CheckInList"))
    passenger : Mapped["Passenger"] = relationship(back_populates=("CheckInList"))

    # child relationships (access children)



class Delay(SAFRSBaseX, Base):
    """
    description: Table to store flight delay information.
    """
    __tablename__ = 'delays'
    _s_collection_name = 'Delay'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    flight_id = Column(ForeignKey('flights.id'))
    delay_duration = Column(Integer)
    reason = Column(String)

    # parent relationships (access parent)
    flight : Mapped["Flight"] = relationship(back_populates=("DelayList"))

    # child relationships (access children)



class FlightCrew(SAFRSBaseX, Base):
    """
    description: Table to store flight crew assignments.
    """
    __tablename__ = 'flight_crews'
    _s_collection_name = 'FlightCrew'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    flight_id = Column(ForeignKey('flights.id'))
    crew_id = Column(ForeignKey('crews.id'))

    # parent relationships (access parent)
    crew : Mapped["Crew"] = relationship(back_populates=("FlightCrewList"))
    flight : Mapped["Flight"] = relationship(back_populates=("FlightCrewList"))

    # child relationships (access children)



class Maintenance(SAFRSBaseX, Base):
    """
    description: Table to store maintenance records.
    """
    __tablename__ = 'maintenances'
    _s_collection_name = 'Maintenance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    flight_id = Column(ForeignKey('flights.id'))
    date = Column(DateTime, nullable=False)
    description = Column(String)

    # parent relationships (access parent)
    flight : Mapped["Flight"] = relationship(back_populates=("MaintenanceList"))

    # child relationships (access children)



class Baggage(SAFRSBaseX, Base):
    """
    description: Table to store baggage details.
    """
    __tablename__ = 'baggages'
    _s_collection_name = 'Baggage'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    booking_id = Column(ForeignKey('bookings.id'))
    weight = Column(Float)

    # parent relationships (access parent)
    booking : Mapped["Booking"] = relationship(back_populates=("BaggageList"))

    # child relationships (access children)
