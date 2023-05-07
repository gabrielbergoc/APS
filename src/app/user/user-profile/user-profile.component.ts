import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';
// import { DeleteAccountDialogComponent } from '../delete-account-dialog/delete-account-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    pictureUrl: 'https://picsum.photos/id/237/300/200'
  };

  constructor(public dialog: MatDialog) { }

  changePassword(): void {
    // const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
    //   width: '300px'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  deleteAccount(): void {
    // const dialogRef = this.dialog.open(DeleteAccountDialogComponent, {
    //   width: '300px'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
