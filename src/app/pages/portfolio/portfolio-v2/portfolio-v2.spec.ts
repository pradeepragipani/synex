import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV2 } from './portfolio-v2';

describe('PortfolioV2', () => {
  let component: PortfolioV2;
  let fixture: ComponentFixture<PortfolioV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
