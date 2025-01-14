import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySwipperComponent } from './my-swipper.component';

describe('MySwipperComponent', () => {
  let component: MySwipperComponent;
  let fixture: ComponentFixture<MySwipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySwipperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySwipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
