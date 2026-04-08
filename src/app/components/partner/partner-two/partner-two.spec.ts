import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerTwo } from './partner-two';

describe('PartnerTwo', () => {
  let component: PartnerTwo;
  let fixture: ComponentFixture<PartnerTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
