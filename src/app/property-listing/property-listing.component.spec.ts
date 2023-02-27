import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingComponent } from './property-listing.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { PropertyService } from '../services/property.service';

@Component({ selector: 'app-property-card', template: '' })
class PropertyCardStubComponent {}

describe('PropertyListingComponent', () => {
  let component: PropertyListingComponent;
  let fixture: ComponentFixture<PropertyListingComponent>;
  let serviceSpy: jasmine.SpyObj<PropertyService>;

  beforeEach(async () => {
    serviceSpy = jasmine.createSpyObj('propertyService', ['propertyService']);

    await TestBed.configureTestingModule({
      declarations: [PropertyListingComponent, PropertyCardStubComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: PropertyService, useValue: serviceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyListingComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  beforeEach(() => {
    component.properties = Array(5).fill({
      id: 73864112,
      bedrooms: 3,
      summary:
        'Property 1 Situated moments from the River Thames in Old Chelsea...',
      displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
      propertyType: 'Flat',
      price: 1950000,
      branchName: 'M2 Property, London',
      propertyUrl: '/property-for-sale/property-73864112.html',
      contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
      propertyTitle: '3 bedroom flat for sale',
      mainImage:
        'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 5 property cards', () => {
    expect(component.properties.length).toEqual(5);
  });
});
