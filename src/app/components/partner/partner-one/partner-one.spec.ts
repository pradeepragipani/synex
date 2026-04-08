import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerOne } from './partner-one';

describe('PartnerOne', () => {
  let component: PartnerOne;
  let fixture: ComponentFixture<PartnerOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
