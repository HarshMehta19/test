import { Component, OnInit } from '@angular/core';
import { CardModel } from '../master/Models/card-model';
import { EIconPath } from '../enums/Icon-Path';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardList: CardModel[];
  constructor() {
    this.cardList = this.getCardList();
  }

  ngOnInit(): void {
  }

  getCardList(): CardModel[] {
    return [{
      Title: "App Development",
      Description: "We develop responsive professional websites, designed to be beautiful to look at and easy to use.",
      NavigationUrl: "app-development",
      IconPath: EIconPath.WebDevelopment
    },
    {
      Title: "Artificial Intelligence",
      Description: "We develop responsive professional websites, designed to be beautiful to look at and easy to use.",
      NavigationUrl: "artificial-intelligence",
      IconPath: EIconPath.AI
    },
    {
      Title: "Staffing",
      Description: "Whether your workforce needs are permanent or temporary, trust our team of experts to meet your recruiting needs.",
      NavigationUrl: "staffing",
      IconPath: EIconPath.Staffing
    },
    {
      Title: "Web Design",
      Description: "Designs of web pages, virtual stores, eCommerce, informative pages, and attractive blogs.",
      NavigationUrl: "web-design",
      IconPath: EIconPath.WebDesign
    }
    ]
  }

}
