import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFour } from './index-four';

describe('IndexFour', () => {
  let component: IndexFour;
  let fixture: ComponentFixture<IndexFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
