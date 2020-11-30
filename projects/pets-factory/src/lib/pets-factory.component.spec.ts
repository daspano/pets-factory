import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsFactoryComponent } from './pets-factory.component';

describe('PetsFactoryComponent', () => {
  let component: PetsFactoryComponent;
  let fixture: ComponentFixture<PetsFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
