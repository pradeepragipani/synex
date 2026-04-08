import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTag } from './blog-tag';

describe('BlogTag', () => {
  let component: BlogTag;
  let fixture: ComponentFixture<BlogTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
