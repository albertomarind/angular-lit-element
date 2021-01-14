import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public items: string;
  public selectedOption = 0;
  public menuData = null;
  constructor() {
    let data = [
      {
        urlImg: 'assets/images/image.png',
        urlImgActive: 'assets/images/image-active.png',
        label: 'Opción 1',
        selected: true,
      },
      {
        urlImg: 'assets/images/image.png',
        urlImgActive: 'assets/images/image-active.png',
        label: 'Opción 2',
        selected: false,
      },
      {
        urlImg: 'assets/images/image.png',
        urlImgActive: 'assets/images/image-active.png',
        label: 'Opción 3',
        selected: false,
      },
      {
        urlImg: 'assets/images/image.png',
        urlImgActive: 'assets/images/image-active.png',
        label: 'Opción 4',
        selected: false,
      },
      {
        urlImg: 'assets/images/image.png',
        urlImgActive: 'assets/images/image-active.png',
        label: 'Opción 5',
        selected: false,
      },
    ];
    this.items = JSON.stringify(data);
  }
  onSelectedItem({detail}) {
    this.selectedOption = detail.index;
    console.log(detail);
  }
}
