import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAttentionComponent } from './new-attention.component';

describe('NewAttentionComponent', () => {
  let component: NewAttentionComponent;
  let fixture: ComponentFixture<NewAttentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAttentionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
