import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOne } from './index-one';

describe('IndexOne', () => {
  let component: IndexOne;
  let fixture: ComponentFixture<IndexOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
