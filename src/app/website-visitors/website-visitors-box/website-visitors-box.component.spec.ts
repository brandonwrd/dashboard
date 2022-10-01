import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteVisitorsBoxComponent } from './website-visitors-box.component';

describe('WebsiteVisitorsBoxComponent', () => {
  let component: WebsiteVisitorsBoxComponent;
  let fixture: ComponentFixture<WebsiteVisitorsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteVisitorsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteVisitorsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
