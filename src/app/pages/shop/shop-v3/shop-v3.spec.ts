import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopV3 } from './shop-v3';

describe('ShopV3', () => {
  let component: ShopV3;
  let fixture: ComponentFixture<ShopV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopV3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
