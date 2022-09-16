import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiememberComponent } from './wiemember.component';

describe('WiememberComponent', () => {
  let component: WiememberComponent;
  let fixture: ComponentFixture<WiememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiememberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WiememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
