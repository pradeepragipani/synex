import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFour } from './footer-four';

describe('FooterFour', () => {
  let component: FooterFour;
  let fixture: ComponentFixture<FooterFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
