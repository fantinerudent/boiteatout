import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesGeneratorComponent } from './quotes-generator.component';

describe('QuotesGeneratorComponent', () => {
  let component: QuotesGeneratorComponent;
  let fixture: ComponentFixture<QuotesGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
