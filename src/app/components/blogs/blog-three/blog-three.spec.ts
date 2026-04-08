import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogThree } from './blog-three';

describe('BlogThree', () => {
  let component: BlogThree;
  let fixture: ComponentFixture<BlogThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
