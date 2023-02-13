import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { SortAndFilterComponent } from './sort-and-filter/sort-and-filter.component';
import { DropdownComponent } from './sort-and-filter/dropdown/dropdown.component';
import { MultiselectComponent } from './sort-and-filter/multiselect/multiselect.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListingComponent,
    SortAndFilterComponent,
    DropdownComponent,
    MultiselectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
