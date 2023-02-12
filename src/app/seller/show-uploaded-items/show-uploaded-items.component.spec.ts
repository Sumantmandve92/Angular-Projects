import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUploadedItemsComponent } from './show-uploaded-items.component';

describe('ShowUploadedItemsComponent', () => {
  let component: ShowUploadedItemsComponent;
  let fixture: ComponentFixture<ShowUploadedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUploadedItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUploadedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
