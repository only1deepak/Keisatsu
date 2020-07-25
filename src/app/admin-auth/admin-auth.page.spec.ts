import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAuthPage } from './admin-auth.page';

describe('AdminAuthPage', () => {
  let component: AdminAuthPage;
  let fixture: ComponentFixture<AdminAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
