import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsV1 } from './portfolio-details-v1';

describe('PortfolioDetailsV1', () => {
  let component: PortfolioDetailsV1;
  let fixture: ComponentFixture<PortfolioDetailsV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioDetailsV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDetailsV1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
