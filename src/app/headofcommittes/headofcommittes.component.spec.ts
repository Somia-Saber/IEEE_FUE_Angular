import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadofcommittesComponent } from './headofcommittes.component';

describe('HeadofcommittesComponent', () => {
  let component: HeadofcommittesComponent;
  let fixture: ComponentFixture<HeadofcommittesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadofcommittesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadofcommittesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
