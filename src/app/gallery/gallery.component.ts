import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { Masonry } from '@thisissoon/angular-masonry';
import { MasonryOptions } from '@thisissoon/angular-masonry';
import { MasonryInstance } from '@thisissoon/angular-masonry';
import { cards } from './cards';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import {Lightbox} from '@ngx-gallery/lightbox';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  items: GalleryItem[];
  @ViewChild('grid') public grid: ElementRef;

  public masonryInstance: MasonryInstance;

  public cards = cards;


  imageData = [
    {
      i: 0,
      srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
      previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
    },
    {
      i: 1,
      srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
      previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
    },
    {
      i: 2,
      srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
      previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
    },
    {
      i: 3,
      srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
      previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
    }
  ];


  constructor(
    // public gallery: Gallery, 
    // public lightbox: Lightbox, 
    @Inject(Masonry) public masonry
  ) {
  }

  ngOnInit() {
    // This is for Basic example
    this.items = this.imageData.map(item => {
      return new ImageItem(item.srcUrl, item.previewUrl);
    });

    // This is for Lightbox example
    //this.gallery.ref('lightbox').load(this.items);
  }

  openLightbox(index: number) {
    // opens the gallery instance into the lightbox 'lightbox'
    //this.lightbox.open(index, 'lightbox');
  }

  ngAfterViewInit() {
    const options: MasonryOptions = {
      itemSelector: '.card',
      columnWidth: '.card',
      gutter: 20,
      fitWidth: true
    };
    this.masonryInstance = new this.masonry(this.grid.nativeElement, options);
  }

  layout() {
    this.masonryInstance.layout();
  }

  ngOnDestroy() {
    this.masonryInstance.destroy();
  }

}
