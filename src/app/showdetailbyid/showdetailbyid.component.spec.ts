import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdetailbyidComponent } from './showdetailbyid.component';

describe('ShowdetailbyidComponent', () => {
  let component: ShowdetailbyidComponent;
  let fixture: ComponentFixture<ShowdetailbyidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowdetailbyidComponent]
    });
    fixture = TestBed.createComponent(ShowdetailbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
