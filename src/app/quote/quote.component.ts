import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  

  quotes: Quote[] = [
    new Quote(1,"If at first you don't succeed, call it version 1.0", 'Perseverance', "Imani", 'Anonymous',new Date(2020,4,14),0),
    new Quote(2,"When life brings big winds of change that almost blow you over,close your eyes, hold on tight and believe", "Perseverance","Njoki",'Lisa Lieberman',new Date(2010,3,14),0),
    new Quote(3, "The elevator to success is out of order. You'll have to use the stairs one step at a time", "Perseverance","Kamau",'Joe Girald', new Date(2020,2,14),0),
    new Quote(4,"Learn from the mistakes of others. You can never live long enough to make them all yourself","Perseverance", "Faith",'Groucho Marx',new Date(2020,1,14),0),
    new Quote(5,"If at first you don't succeed, then skydiving definitely isn't for you","Perseverance","David",'Steven Wright',new Date(2020,4,14),0),
    new Quote(6,"Behind every good programmer is a frustrated programmer", 'Perseverance',"Mary",'Anonymous',new Date(2020,6,14),0),
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  toggleDetails(index){
    this.quotes[index].showTheme = !this.quotes[index].showTheme;
  }

  deleteQuote(isUnwanted: any, index: number){
    if (isUnwanted) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].words}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  

  addNewQuote(quote){
    let goalLength = this.quotes.length;
    quote.id = goalLength+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
  }

 
  constructor() { }
 
  ngOnInit() {
  }

  likeButtonClick(i: number) {
   this.quotes[i].like += 1;
 }

 dislikeButtonClick(i: number) {
  this.quotes[i].like -= 1;
}
}
 
