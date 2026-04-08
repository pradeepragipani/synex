import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioV1 } from './portfolio-v1';

describe('PortfolioV1', () => {
  let component: PortfolioV1;
  let fixture: ComponentFixture<PortfolioV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioV1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
