import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClients } from './our-clients';

describe('OurClients', () => {
  let component: OurClients;
  let fixture: ComponentFixture<OurClients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurClients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurClients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
