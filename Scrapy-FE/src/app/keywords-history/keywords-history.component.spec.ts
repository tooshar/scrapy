import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsHistoryComponent } from './keywords-history.component';

describe('KeywordsHistoryComponent', () => {
  let component: KeywordsHistoryComponent;
  let fixture: ComponentFixture<KeywordsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
