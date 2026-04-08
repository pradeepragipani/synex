import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTwo } from './navbar-two';

describe('NavbarTwo', () => {
  let component: NavbarTwo;
  let fixture: ComponentFixture<NavbarTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
