import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterProduitsChoisieComponent } from './consulter-produits-choisie.component';

describe('ConsulterProduitsChoisieComponent', () => {
  let component: ConsulterProduitsChoisieComponent;
  let fixture: ComponentFixture<ConsulterProduitsChoisieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterProduitsChoisieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterProduitsChoisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
