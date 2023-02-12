import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAvailableItemsComponent } from './all-available-items.component';

describe('AllAvailableItemsComponent', () => {
  let component: AllAvailableItemsComponent;
  let fixture: ComponentFixture<AllAvailableItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAvailableItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAvailableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
