import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddcomentComponent } from './adddcoment.component';

describe('AdddcomentComponent', () => {
  let component: AdddcomentComponent;
  let fixture: ComponentFixture<AdddcomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddcomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddcomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
