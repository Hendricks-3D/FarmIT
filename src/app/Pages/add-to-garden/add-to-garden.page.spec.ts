import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddToGardenPage } from './add-to-garden.page';

describe('AddToGardenPage', () => {
  let component: AddToGardenPage;
  let fixture: ComponentFixture<AddToGardenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToGardenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddToGardenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
