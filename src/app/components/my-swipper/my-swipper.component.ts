import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA
import { register } from 'swiper/element/bundle'; // Register Swiper Web Components

@Component({
  selector: 'app-my-swipper',
  standalone: true, // Mark as a standalone component
  templateUrl: './my-swipper.component.html',
  styleUrls: ['./my-swipper.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add CUSTOM_ELEMENTS_SCHEMA here
})
export class MySwipperComponent implements OnInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngOnInit(): void {
  }

 
}
