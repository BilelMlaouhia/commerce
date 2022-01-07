import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProduitsComponent } from './ajouter-produits.component';

describe('AjouterProduitsComponent', () => {
  let component: AjouterProduitsComponent;
  let fixture: ComponentFixture<AjouterProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
