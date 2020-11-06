import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroListarComponent } from './livro-listar.component';

describe('LivroListarComponent', () => {
  let component: LivroListarComponent;
  let fixture: ComponentFixture<LivroListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
       ],
      declarations: [ LivroListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Livros', () => {
    const fixture = TestBed.createComponent(LivroListarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('Livros');
  });  
});
