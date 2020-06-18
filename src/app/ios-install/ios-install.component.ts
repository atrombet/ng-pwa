import { Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ios-install',
  templateUrl: './ios-install.component.html',
  styleUrls: ['./ios-install.component.scss']
})
export class IosInstallComponent {

  constructor(private snackBarRef: MatSnackBarRef<IosInstallComponent>) { }

  public close() {
    this.snackBarRef.dismiss();
  }

}
