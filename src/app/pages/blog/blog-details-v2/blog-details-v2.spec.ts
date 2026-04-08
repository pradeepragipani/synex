import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsV2 } from './blog-details-v2';

describe('BlogDetailsV2', () => {
  let component: BlogDetailsV2;
  let fixture: ComponentFixture<BlogDetailsV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailsV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailsV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
