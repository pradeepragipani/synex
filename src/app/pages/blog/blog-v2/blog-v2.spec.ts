import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV2 } from './blog-v2';

describe('BlogV2', () => {
  let component: BlogV2;
  let fixture: ComponentFixture<BlogV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
