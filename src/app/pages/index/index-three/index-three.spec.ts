import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexThree } from './index-three';

describe('IndexThree', () => {
  let component: IndexThree;
  let fixture: ComponentFixture<IndexThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
