import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCardComponent } from './property-card.component';

describe('PropertyCardComponent', () => {
  let component: PropertyCardComponent;
  let fixture: ComponentFixture<PropertyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyCardComponent);
    component = fixture.componentInstance;
    component.property = {
      id: 1234,
      summary: 'Superbly insulated, energy efficient, secure and virtually invisible',
      displayAddress: 'North Shire, TS13 4TJ',
      price: 500,
      branchName: '[branch/agent name]',
      propertyTitle: '2 Bed Hobbit Hole For Sale',
      mainImage: 'something.com/61AG4UpUoPL._SX300_QL70_.jpg',
      contactUrl: '/branch/contact-url',
      bedrooms: 3,
      propertyType: 'detached',
      propertyUrl: '/property/1234'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the address', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p.displayAddress')?.textContent).toContain('North Shire, TS13 4TJ');
  });
  //
  it('should render property image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')?.src).toContain('61AG4UpUoPL._SX300_QL70_.jpg');
  });

  it('should render property price', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div.price')?.textContent).toContain('£ 500');
  });

  it('should render property title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.propertyTitle')?.textContent).toContain('2 Bed Hobbit Hole For Sale');
  });

  it('should render property summary', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.summary')?.textContent).toContain('Superbly insulated, energy efficient, secure and virtually invisible');
  });

  it('should render agent contact link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const anchor = compiled.querySelector('.agentInfo a') as HTMLAnchorElement;
    expect(anchor.textContent).toContain('Contact [branch/agent name]');
    expect(anchor.href).toContain('mailto:fakemail.fedtest@rightmove.co.uk');
  });
});
