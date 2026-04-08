import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFour } from './navbar-four';

describe('NavbarFour', () => {
  let component: NavbarFour;
  let fixture: ComponentFixture<NavbarFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
