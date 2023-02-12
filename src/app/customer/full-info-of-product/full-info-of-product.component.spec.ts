import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInfoOfProductComponent } from './full-info-of-product.component';

describe('FullInfoOfProductComponent', () => {
  let component: FullInfoOfProductComponent;
  let fixture: ComponentFixture<FullInfoOfProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullInfoOfProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullInfoOfProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
