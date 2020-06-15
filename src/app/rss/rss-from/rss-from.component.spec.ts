import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssFromComponent } from './rss-from.component';

describe('RssFromComponent', () => {
  let component: RssFromComponent;
  let fixture: ComponentFixture<RssFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
