import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsV2 } from './portfolio-details-v2';

describe('PortfolioDetailsV2', () => {
  let component: PortfolioDetailsV2;
  let fixture: ComponentFixture<PortfolioDetailsV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioDetailsV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDetailsV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
