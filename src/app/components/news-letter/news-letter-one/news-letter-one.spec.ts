import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterOne } from './news-letter-one';

describe('NewsLetterOne', () => {
  let component: NewsLetterOne;
  let fixture: ComponentFixture<NewsLetterOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsLetterOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsLetterOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
