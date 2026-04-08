import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOne } from './blog-one';

describe('BlogOne', () => {
  let component: BlogOne;
  let fixture: ComponentFixture<BlogOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
