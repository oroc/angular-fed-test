import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingComponent } from './property-listing.component';
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";

@Component({selector: 'app-property-card', template: ''})
class PropertyCardStubComponent {
}

describe('PropertyListingComponent', () => {
  let component: PropertyListingComponent;
  let fixture: ComponentFixture<PropertyListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyListingComponent, PropertyCardStubComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 5 property cards', () => {
    expect(component.properties.length).toEqual(5);
  });
});
