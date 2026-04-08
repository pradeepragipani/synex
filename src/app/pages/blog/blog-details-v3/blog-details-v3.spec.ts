import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsV3 } from './blog-details-v3';

describe('BlogDetailsV3', () => {
  let component: BlogDetailsV3;
  let fixture: ComponentFixture<BlogDetailsV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailsV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailsV3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
