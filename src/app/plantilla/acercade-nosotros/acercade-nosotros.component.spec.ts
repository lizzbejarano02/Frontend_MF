import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeNosotrosComponent } from './acercade-nosotros.component';

describe('AcercadeNosotrosComponent', () => {
  let component: AcercadeNosotrosComponent;
  let fixture: ComponentFixture<AcercadeNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeNosotrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercadeNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
