import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarThree } from './navbar-three';

describe('NavbarThree', () => {
  let component: NavbarThree;
  let fixture: ComponentFixture<NavbarThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
