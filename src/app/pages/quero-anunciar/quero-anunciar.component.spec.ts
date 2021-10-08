import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueroAnunciarComponent } from './quero-anunciar.component';

describe('QueroAnunciarComponent', () => {
  let component: QueroAnunciarComponent;
  let fixture: ComponentFixture<QueroAnunciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueroAnunciarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueroAnunciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
