import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV3 } from './portfolio-v3';

describe('PortfolioV3', () => {
  let component: PortfolioV3;
  let fixture: ComponentFixture<PortfolioV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioV3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
