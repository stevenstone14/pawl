import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordRulesComponent } from './discord-rules.component';

describe('DiscordRulesComponent', () => {
  let component: DiscordRulesComponent;
  let fixture: ComponentFixture<DiscordRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscordRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
