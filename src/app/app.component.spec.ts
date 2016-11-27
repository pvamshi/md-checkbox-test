/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule.forRoot()
      ],
      declarations: [
        AppComponent,
      ],
    });
  });


  it('should be checked', async(()=>{
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('md-checkbox').length).toBe(1);
    expect(compiled.querySelector('md-checkbox').classList).toContain('md-checkbox-checked');
  }));
});
