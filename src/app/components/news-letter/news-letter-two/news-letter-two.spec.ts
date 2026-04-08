import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterTwo } from './news-letter-two';

describe('NewsLetterTwo', () => {
  let component: NewsLetterTwo;
  let fixture: ComponentFixture<NewsLetterTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsLetterTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsLetterTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
