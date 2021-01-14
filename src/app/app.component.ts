import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationBehaviorOptions } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('nv1')
  nv1: ElementRef;

  @ViewChild('nv2')
  nv2: ElementRef;

  public items1: Array<any>;
  public items2: Array<any>;
  public selectedOption = 0;
  constructor() {
    this.items1 = [
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
    this.items2 = [
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
  }
  ngAfterViewInit(): void {
    this.nv1.nativeElement.items = this.items1;
    this.nv2.nativeElement.items = this.items2;
  }
  ngOnInit(): void {}

  onSelectedItem({ detail }) {
    this.selectedOption = detail.index;
    console.log(detail);
  }
}
