import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WieactivitiesComponent } from './wieactivities.component';

describe('WieactivitiesComponent', () => {
  let component: WieactivitiesComponent;
  let fixture: ComponentFixture<WieactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WieactivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WieactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
