import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Airline', loadChildren: () => import('./Airline/Airline.module').then(m => m.AirlineModule) },
    
        { path: 'Airport', loadChildren: () => import('./Airport/Airport.module').then(m => m.AirportModule) },
    
        { path: 'Baggage', loadChildren: () => import('./Baggage/Baggage.module').then(m => m.BaggageModule) },
    
        { path: 'Booking', loadChildren: () => import('./Booking/Booking.module').then(m => m.BookingModule) },
    
        { path: 'CheckIn', loadChildren: () => import('./CheckIn/CheckIn.module').then(m => m.CheckInModule) },
    
        { path: 'Crew', loadChildren: () => import('./Crew/Crew.module').then(m => m.CrewModule) },
    
        { path: 'Delay', loadChildren: () => import('./Delay/Delay.module').then(m => m.DelayModule) },
    
        { path: 'Flight', loadChildren: () => import('./Flight/Flight.module').then(m => m.FlightModule) },
    
        { path: 'FlightCrew', loadChildren: () => import('./FlightCrew/FlightCrew.module').then(m => m.FlightCrewModule) },
    
        { path: 'Gate', loadChildren: () => import('./Gate/Gate.module').then(m => m.GateModule) },
    
        { path: 'Maintenance', loadChildren: () => import('./Maintenance/Maintenance.module').then(m => m.MaintenanceModule) },
    
        { path: 'Passenger', loadChildren: () => import('./Passenger/Passenger.module').then(m => m.PassengerModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }