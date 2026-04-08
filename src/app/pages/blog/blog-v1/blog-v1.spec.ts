import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV1 } from './blog-v1';

describe('BlogV1', () => {
  let component: BlogV1;
  let fixture: ComponentFixture<BlogV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogV1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
