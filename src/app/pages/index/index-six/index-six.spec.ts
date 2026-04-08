import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSix } from './index-six';

describe('IndexSix', () => {
  let component: IndexSix;
  let fixture: ComponentFixture<IndexSix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
