import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMenuTwo } from './navbar-menu-two';

describe('NavbarMenuTwo', () => {
  let component: NavbarMenuTwo;
  let fixture: ComponentFixture<NavbarMenuTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMenuTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMenuTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
