import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from "@angular/core";

@Component({selector: 'app-property-listing', template: ''})
class PropertyListingStubComponent {
}

@Component({selector: 'app-sort-and-filter', template: ''})
class SortAndFilterStubComponent {
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PropertyListingStubComponent,
        SortAndFilterStubComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-fed-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-fed-test');
  });
});
