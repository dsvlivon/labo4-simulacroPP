import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasListadoComponent } from './peliculas-listado.component';

describe('PeliculasListadoComponent', () => {
  let component: PeliculasListadoComponent;
  let fixture: ComponentFixture<PeliculasListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
