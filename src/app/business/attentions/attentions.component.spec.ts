import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionsComponent } from './attentions.component';

describe('AttentionsComponent', () => {
  let component: AttentionsComponent;
  let fixture: ComponentFixture<AttentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttentionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
