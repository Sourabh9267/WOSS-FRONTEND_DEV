import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SubmitListingComponent } from './common/submit-listing-component/submit-listing-component';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
  
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path:"home",
        component:HomePage
    },
    {
        path:"submit_listing",
        component:SubmitListingComponent
    }

];
