import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSix } from './blog-six';

describe('BlogSix', () => {
  let component: BlogSix;
  let fixture: ComponentFixture<BlogSix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
