import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrdersComponent } from './client-orders.component';

describe('UserOrdersComponent', () => {
  let component: ClientOrdersComponent;
  let fixture: ComponentFixture<ClientOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
