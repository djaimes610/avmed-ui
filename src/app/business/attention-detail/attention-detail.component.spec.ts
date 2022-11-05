import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionDetailComponent } from './attention-detail.component';

describe('AttentionDetailComponent', () => {
  let component: AttentionDetailComponent;
  let fixture: ComponentFixture<AttentionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttentionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttentionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
