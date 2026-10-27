import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantillasFuncionSimpleComponent } from './plantillas-funcion-simple-component';

describe('PlantillasFuncionSimpleComponent', () => {
  let component: PlantillasFuncionSimpleComponent;
  let fixture: ComponentFixture<PlantillasFuncionSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillasFuncionSimpleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillasFuncionSimpleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
