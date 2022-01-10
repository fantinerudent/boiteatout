import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-quotes-generator',
  templateUrl: './quotes-generator.component.html',
  styleUrls: ['./quotes-generator.component.css']
})
export class QuotesGeneratorComponent implements OnInit {

  constructor() { }
  quote: String = '';

  refreshQuote() {
    axios.get('https://api.kanye.rest')
      .then((response) => {
        this.quote = response.data.quote;
        console.log('this quote after click =>' , this.quote)
      })
      .catch(function (erreur) {
        console.log(erreur);
      });

  }

  ngOnInit(): void {
    axios.get('https://api.kanye.rest')
      .then((response) => {
        this.quote = response.data.quote;

      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }

}
