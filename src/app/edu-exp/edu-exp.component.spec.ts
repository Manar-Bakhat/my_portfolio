import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduExpComponent } from './edu-exp.component';

describe('EduExpComponent', () => {
  let component: EduExpComponent;
  let fixture: ComponentFixture<EduExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduExpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
