import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFive } from './index-five';

describe('IndexFive', () => {
  let component: IndexFive;
  let fixture: ComponentFixture<IndexFive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexFive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexFive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
