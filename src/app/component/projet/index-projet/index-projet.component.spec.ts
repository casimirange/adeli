import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProjetComponent } from './index-projet.component';

describe('IndexProjetComponent', () => {
  let component: IndexProjetComponent;
  let fixture: ComponentFixture<IndexProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
