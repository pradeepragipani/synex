import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFour } from './blog-four';

describe('BlogFour', () => {
  let component: BlogFour;
  let fixture: ComponentFixture<BlogFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
