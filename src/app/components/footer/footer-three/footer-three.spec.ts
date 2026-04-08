import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterThree } from './footer-three';

describe('FooterThree', () => {
  let component: FooterThree;
  let fixture: ComponentFixture<FooterThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
