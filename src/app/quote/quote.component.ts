import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,"If at first you don't succeed, call it version 1.0", 'Perseverance', "Imani", 'Anonymous',new Date(2020,6,14)),
    new Quote(2,"When life brings big winds of change that almost blow you over,close your eyes, hold on tight and believe", "Perseverance","Njoki",'Lisa Lieberman',new Date(2010,6,14)),
    new Quote(3, "The elevator to success is out of order. You'll have to use the stairs one step at a time", "Perseverance","Kamau",'Joe Girald', new Date(2020,6,14)),
    new Quote(4,"Learn from the mistakes of others. You can never live long enough to make them all yourself","Perseverance", "Faith",'Groucho Marx',new Date(2020,6,14)),
    new Quote(5,"If at first you don't succeed, then skydiving definitely isn't for you","Perseverance","David",'Steven Wright',new Date(2020,6,14)),
    new Quote(6,"Behind every good programmer is a frustrated programmer", 'Perseverance',"Mary",'Anonymous',new Date(2020,6,14)),
  ];

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


}
 
