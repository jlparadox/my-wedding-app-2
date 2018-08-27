import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
      this.galleryOptions = [
        {
            width: '600px',
            height: '400px',
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
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
