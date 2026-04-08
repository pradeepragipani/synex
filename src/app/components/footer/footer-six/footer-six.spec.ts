import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSix } from './footer-six';

describe('FooterSix', () => {
  let component: FooterSix;
  let fixture: ComponentFixture<FooterSix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
