import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgOptimizedImage, RouterLink],
  selector: 'app-svar-kunde',
  styleUrl: './svar-kunde.css',
  templateUrl: './svar-kunde.html',
})
export class SvarKunde {}
