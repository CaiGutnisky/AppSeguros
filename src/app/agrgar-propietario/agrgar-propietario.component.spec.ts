import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrgarPropietarioComponent } from './agrgar-propietario.component';

describe('AgrgarPropietarioComponent', () => {
  let component: AgrgarPropietarioComponent;
  let fixture: ComponentFixture<AgrgarPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrgarPropietarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrgarPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
