import { Component } from '@angular/core';

@Component({
  selector: 'my-image',
  template: `
    <img
      elementtiming="my-image"
      src="https://wallpaperaccess.com/full/3547002.jpg"
    />
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class MyImageComponent {}
