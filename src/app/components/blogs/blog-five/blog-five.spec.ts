import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFive } from './blog-five';

describe('BlogFive', () => {
  let component: BlogFive;
  let fixture: ComponentFixture<BlogFive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogFive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogFive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
