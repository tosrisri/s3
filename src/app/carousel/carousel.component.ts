import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  // images = [62, 83, 466, 965, 982, 1043].map((n) => `https://picsum.photos/id/${n}/2000/400`);
  images = ["assets/img/fhd-bg-grey.jpg","assets/img/fhd-bg-grey.jpg","assets/img/fhd-bg-grey.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
