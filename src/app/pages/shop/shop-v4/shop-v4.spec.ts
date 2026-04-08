import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopV4 } from './shop-v4';

describe('ShopV4', () => {
  let component: ShopV4;
  let fixture: ComponentFixture<ShopV4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopV4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopV4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
