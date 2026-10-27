import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantillasFuncionMultipleComponent } from './plantillas-funcion-multiple-component';

describe('PlantillasFuncionMultipleComponent', () => {
  let component: PlantillasFuncionMultipleComponent;
  let fixture: ComponentFixture<PlantillasFuncionMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillasFuncionMultipleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillasFuncionMultipleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
