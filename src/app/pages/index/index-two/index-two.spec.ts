import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTwo } from './index-two';

describe('IndexTwo', () => {
  let component: IndexTwo;
  let fixture: ComponentFixture<IndexTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
