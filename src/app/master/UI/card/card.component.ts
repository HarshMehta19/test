import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardModel } from '../../Models/card-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: CardModel;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cardClick() {
    console.log("Url", this.card.NavigationUrl)
    this.router.navigate(["/" + this.card.NavigationUrl]);
  }
}
