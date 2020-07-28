import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantTipsPage } from './plant-tips.page';

describe('PlantTipsPage', () => {
  let component: PlantTipsPage;
  let fixture: ComponentFixture<PlantTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantTipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
