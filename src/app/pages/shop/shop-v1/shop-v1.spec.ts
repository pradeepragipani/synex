import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopV1 } from './shop-v1';

describe('ShopV1', () => {
  let component: ShopV1;
  let fixture: ComponentFixture<ShopV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopV1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
