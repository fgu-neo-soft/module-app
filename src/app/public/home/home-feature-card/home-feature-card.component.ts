import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feature-card',
  templateUrl: './home-feature-card.component.html',
  styles: [
  ]
})
export class HomeFeatureCardComponent implements OnInit {

  // @Input récupère des données du composant parent (home-features)
  @Input() description!: string;
  @Input() icon!: string;
  @Input() title!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
