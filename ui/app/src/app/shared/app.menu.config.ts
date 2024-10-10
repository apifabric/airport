import { MenuRootItem } from 'ontimize-web-ngx';

import { AirlineCardComponent } from './Airline-card/Airline-card.component';

import { AirportCardComponent } from './Airport-card/Airport-card.component';

import { BaggageCardComponent } from './Baggage-card/Baggage-card.component';

import { BookingCardComponent } from './Booking-card/Booking-card.component';

import { CheckInCardComponent } from './CheckIn-card/CheckIn-card.component';

import { CrewCardComponent } from './Crew-card/Crew-card.component';

import { DelayCardComponent } from './Delay-card/Delay-card.component';

import { FlightCardComponent } from './Flight-card/Flight-card.component';

import { FlightCrewCardComponent } from './FlightCrew-card/FlightCrew-card.component';

import { GateCardComponent } from './Gate-card/Gate-card.component';

import { MaintenanceCardComponent } from './Maintenance-card/Maintenance-card.component';

import { PassengerCardComponent } from './Passenger-card/Passenger-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Airline', name: 'AIRLINE', icon: 'view_list', route: '/main/Airline' }
    
        ,{ id: 'Airport', name: 'AIRPORT', icon: 'view_list', route: '/main/Airport' }
    
        ,{ id: 'Baggage', name: 'BAGGAGE', icon: 'view_list', route: '/main/Baggage' }
    
        ,{ id: 'Booking', name: 'BOOKING', icon: 'view_list', route: '/main/Booking' }
    
        ,{ id: 'CheckIn', name: 'CHECKIN', icon: 'view_list', route: '/main/CheckIn' }
    
        ,{ id: 'Crew', name: 'CREW', icon: 'view_list', route: '/main/Crew' }
    
        ,{ id: 'Delay', name: 'DELAY', icon: 'view_list', route: '/main/Delay' }
    
        ,{ id: 'Flight', name: 'FLIGHT', icon: 'view_list', route: '/main/Flight' }
    
        ,{ id: 'FlightCrew', name: 'FLIGHTCREW', icon: 'view_list', route: '/main/FlightCrew' }
    
        ,{ id: 'Gate', name: 'GATE', icon: 'view_list', route: '/main/Gate' }
    
        ,{ id: 'Maintenance', name: 'MAINTENANCE', icon: 'view_list', route: '/main/Maintenance' }
    
        ,{ id: 'Passenger', name: 'PASSENGER', icon: 'view_list', route: '/main/Passenger' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AirlineCardComponent

    ,AirportCardComponent

    ,BaggageCardComponent

    ,BookingCardComponent

    ,CheckInCardComponent

    ,CrewCardComponent

    ,DelayCardComponent

    ,FlightCardComponent

    ,FlightCrewCardComponent

    ,GateCardComponent

    ,MaintenanceCardComponent

    ,PassengerCardComponent

];