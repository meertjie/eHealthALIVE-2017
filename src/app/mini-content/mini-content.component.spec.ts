import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniContentComponent } from './mini-content.component';

describe('MiniContentComponent', () => {
  let component: MiniContentComponent;
  let fixture: ComponentFixture<MiniContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
