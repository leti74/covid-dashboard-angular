import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDetail } from './state-detail';

describe('StateDetail', () => {
  let component: StateDetail;
  let fixture: ComponentFixture<StateDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
