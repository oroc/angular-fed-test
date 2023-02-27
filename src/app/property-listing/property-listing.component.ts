import { Component } from '@angular/core';
import { Property } from 'src/types';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.scss'],
})
export class PropertyListingComponent {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService
      .getProperties()
      .subscribe((data) => (this.properties = data));
  }
}
