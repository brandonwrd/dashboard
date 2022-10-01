import { Component, OnInit } from '@angular/core';
import { SentimentAnalysis } from '../SentimentAnalysis';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
