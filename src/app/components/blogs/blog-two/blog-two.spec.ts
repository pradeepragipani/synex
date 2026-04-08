import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTwo } from './blog-two';

describe('BlogTwo', () => {
  let component: BlogTwo;
  let fixture: ComponentFixture<BlogTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
