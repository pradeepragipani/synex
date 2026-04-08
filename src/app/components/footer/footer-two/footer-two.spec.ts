import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTwo } from './footer-two';

describe('FooterTwo', () => {
  let component: FooterTwo;
  let fixture: ComponentFixture<FooterTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
