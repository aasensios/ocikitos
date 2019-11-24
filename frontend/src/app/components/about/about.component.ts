import { Component, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  authors = [
    {
      fullname: 'Alejandro Asensio',
      jobtitle: 'Junior Fullstack Web Developer and Bioinformatic',
      description: 'Clean code lover; Japanese culture fan, so big <i>otaku</i> here.',
      avatar: 'assets/images/cards/alejandro-squared.jpg',
      social: [
        {
          name: 'Gmail',
          link: 'alejandro.asensio.10@gmail.com',
          fontawesome: 'fab fa-google',
          color: 'danger'
        },
        {
          name: 'GitHub',
          link: 'https://github.com/aasensios',
          fontawesome: 'fab fa-github',
          color: 'dark'
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/alejandroasensiosanchez/',
          fontawesome: 'fab fa-linkedin',
          color: 'primary'
        }
      ]
    },
    {
      fullname: 'Óscar Burgos',
      jobtitle: 'Junior Fullstack Web Developer and Bioinformatic',
      description: 'Founder of <a href="http://www.geekandchic.es/">Geek & Chick</a> startup and Netflix addict.',
      avatar: 'assets/images/cards/oscar_200x200.jpg',
      social: [
        {
          name: 'Gmail',
          link: 'mihifidem@gmail.com',
          fontawesome: 'fab fa-google',
          color: 'danger'
        },
        {
          name: 'GitHub',
          link: 'https://github.com/mihifidem',
          fontawesome: 'fab fa-github',
          color: 'dark'
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/oscar-burgos-12912250/',
          fontawesome: 'fab fa-linkedin',
          color: 'primary'
        },
        // {
        //   name: 'Geek & Chic',
        //   link: 'http://www.geekandchic.es/',
        //   fontawesome: 'fas fa-microchip', // gem, ring
        //   color: 'warning'
        // }
      ]
    }
  ]

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url)
  }

  ngOnInit() { }
}
