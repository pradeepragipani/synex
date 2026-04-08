import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOne } from './navbar-one';

describe('NavbarOne', () => {
  let component: NavbarOne;
  let fixture: ComponentFixture<NavbarOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
