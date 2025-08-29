import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SubmitListingComponent } from './common/submit-listing-component/submit-listing-component';
import { HomePage } from './home-page/home-page';
import { FeaturedComponent } from './common/featured-component/featured-component';
import { SignupPage } from './signup-page/signup-page';
import { NotFoundPage } from './not-found-page/not-found-page';

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
    },
    {
        path:"listings",
        component:FeaturedComponent
    },
    {
        path:"signup",
        component:SignupPage
    },
    {
    path: "**",
    // redirectTo: "home"
    component:NotFoundPage   
  }


];
