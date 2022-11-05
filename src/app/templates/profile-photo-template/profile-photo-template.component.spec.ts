import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhotoTemplateComponent } from './profile-photo-template.component';

describe('ProfilePhotoTemplateComponent', () => {
  let component: ProfilePhotoTemplateComponent;
  let fixture: ComponentFixture<ProfilePhotoTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePhotoTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePhotoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
