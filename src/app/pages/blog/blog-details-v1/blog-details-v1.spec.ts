import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsV1 } from './blog-details-v1';

describe('BlogDetailsV1', () => {
  let component: BlogDetailsV1;
  let fixture: ComponentFixture<BlogDetailsV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailsV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailsV1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
