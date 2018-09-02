import { Component, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { GalleryItem, GalleryConfig, ImageItem, ThumbnailsPosition } from '@ngx-gallery/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  readonly images$: Observable<GalleryItem[]>;

  readonly media$: Observable<GalleryConfig>;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  images: GalleryItem[];
  constructor(media: ObservableMedia) {
    this.media$ = media.asObservable().pipe(
        map((res: MediaChange) => {
          if (res.mqAlias === 'sm' || res.mqAlias === 'xs') {
            return {
              thumbPosition: ThumbnailsPosition.Top,
              thumbWidth: 80,
              thumbHeight: 80
            };
          }
          return {
            thumbPosition: ThumbnailsPosition.Left,
            thumbWidth: 120,
            thumbHeight: 90
          };
        })
      );
   }

  ngOnInit() {
    this.images = [
        new ImageItem({ src: 'assets/images/aquila/img_1.jpg', thumb: 'assets/images/aquila/img_1.jpg'}),
        new ImageItem({ src: 'assets/images/aquila/img_1.jpg', thumb: 'assets/images/aquila/img_1.jpg'}),
        new ImageItem({ src: 'assets/images/aquila/img_1.jpg', thumb: 'assets/images/aquila/img_1.jpg'}),
        new ImageItem({ src: 'assets/images/aquila/img_1.jpg', thumb: 'assets/images/aquila/img_1.jpg'}),
    ];
    this.galleryImages = [
        {
            small: 'assets/images/aquila/img_1.jpg',
            medium: 'assets/images/aquila/img_1.jpg',
            big: 'assets/images/aquila/img_1.jpg'
        },
        {
            small: 'assets/images/aquila/img_2.jpg',
            medium: 'assets/images/aquila/img_2.jpg',
            big: 'assets/images/aquila/img_2.jpg'
        },
        {
            small: 'assets/images/aquila/img_3.jpg',
            medium: 'assets/images/aquila/img_3.jpg',
            big: 'assets/images/aquila/img_3.jpg'
        },
        {
            small: 'assets/images/aquila/img_4.jpg',
            medium: 'assets/images/aquila/img_4.jpg',
            big: 'assets/images/aquila/img_4.jpg'
        },
        {
            small: 'assets/images/aquila/img_5.jpg',
            medium: 'assets/images/aquila/img_5.jpg',
            big: 'assets/images/aquila/img_5.jpg'
        },
        {
            small: 'assets/images/aquila/img_6.jpg',
            medium: 'assets/images/aquila/img_6.jpg',
            big: 'assets/images/aquila/img_6.jpg'
        }
    ];
  }

}
