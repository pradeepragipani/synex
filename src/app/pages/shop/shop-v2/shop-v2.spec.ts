import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopV2 } from './shop-v2';

describe('ShopV2', () => {
  let component: ShopV2;
  let fixture: ComponentFixture<ShopV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
