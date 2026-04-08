import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgerPassword } from './forger-password';

describe('ForgerPassword', () => {
  let component: ForgerPassword;
  let fixture: ComponentFixture<ForgerPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgerPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgerPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
