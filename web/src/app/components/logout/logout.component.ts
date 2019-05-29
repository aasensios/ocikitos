import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [AuthService]
})
export class LogoutComponent implements OnInit {

  public user: User;
  private error = '';

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  /**
   * Log out the current active user, revoking the access token
   * from the API response in web browser's local storage.
   */
  logout() {
    localStorage.removeItem('access_token');
    // localStorage.clear();

    // Get the active user id.
    // this.authService.getUser()
    //   .subscribe(
    //     response => {
    //       this.user.id = response.id;
    //     }
    //   );

    // // Debugging
    // this.user = new User();
    // this.user.id = 2;

    // // Revoke access token
    // this.authService.revokeToken(this.user)
    //   .subscribe(
    //     // Success
    //     response => {
    //       console.log(response);
    //     },

    //     // Error handling
    //     error => this.error = error,

    //     // Complete
    //     () => {
    //       // Feedback to the user -- TODO: redirect to the home page
    //       this.authService.getUser()
    //         .subscribe(
    //           response => {
    //             console.log(response);
    //           }
    //         );
    //     }
    //   );
  }

}
