import { TestBed } from '@angular/core/testing';

import { PropertyService } from './property.service';

describe('PropertyService', () => {
  let service: PropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    let httpSpy = jasmine.createSpyObj('http', ['http']);

    service = new PropertyService(httpSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
