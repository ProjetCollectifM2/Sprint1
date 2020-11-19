import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceadminComponent } from './espaceadmin.component';

describe('EspaceadminComponent', () => {
  let component: EspaceadminComponent;
  let fixture: ComponentFixture<EspaceadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
