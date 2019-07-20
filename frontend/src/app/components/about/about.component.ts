import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
      description: `I'm a passionate ​geek​, focused on learning new skills and delighted by their potential of improving
      our human daily life.`,
      avatar: 'assets/images/cards/alejandro-squared.jpg',
      social: [
        {
          name: 'Email',
          link: 'alejandro.asensio.10@gmail.com',
          fontawesome: 'google'
        },
        {
          name: 'GitHub',
          link: 'https://github.com/aasensios',
          fontawesome: 'github'
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/alejandroasensiosanchez/',
          fontawesome: 'linkedin'
        },
      ]
    },
    {
      fullname: 'Óscar Burgos',
      jobtitle: 'Junior Fullstack Web Developer and Bioinformatic',
      description: `AQUI VA TU DESCRIPCION`,
      avatar: 'assets/images/cards/oscar_200x200.jpg',
      social: [
        {
          name: 'Email',
          link: 'mihifidem@gmail.com',
          fontawesome: 'google'
        },
        {
          name: 'GitHub',
          link: 'https://github.com/mihifidem',
          fontawesome: 'github'
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/oscar-burgos-12912250/',
          fontawesome: 'linkedin'
        },
      ]
    }
  ];

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
  }

}
