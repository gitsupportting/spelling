import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fixspelling';

  Language: string = 'Language'

  filterClicked: boolean = false;
  phraseSearch: string = '';

  filterCounts: boolean = true;
  filterCounts10: boolean = false;
  filterCounts25: boolean = false;
  filterCounts50: boolean = false;
  filterCounts100: boolean = false;
  filterCounts250: boolean = false;
  filterCounts500: boolean = false;
  filterCounts1000: boolean = false;

  filterReviewedStatus: boolean = true;
  filterReviewedStatusP: boolean = false;
  filterReviewedStatusR: boolean = false;
  filterReviewedStatusB: boolean = false;

  filterAI: boolean = true;
  filterAccounts: boolean = true;
  filterCreated: boolean = true;
  constructor() {

  }
  ngOnInit() {

  }
  onLanguageEn() {
    this.Language = 'English'
  }
  onLanguageCh() {
    this.Language = 'Chinese'
  }
  onLanguageRu() {
    this.Language = 'Russian'
  }

  onFilterData() {
    this.filterClicked = true;
  }
  onFilterDataClose() {
    this.filterClicked = false;
  }

  onFilterCounts() {
    this.filterCounts = !(this.filterCounts);
  }
  onFilterCounts10() {
    this.filterCounts10 = !(this.filterCounts10);
    if(this.filterCounts10){
      this.filterCounts25=false;
      this.filterCounts50=false;
      this.filterCounts100=false;
      this.filterCounts250=false;
      this.filterCounts500=false;
      this.filterCounts1000=false;
    }
  }
  onFilterCounts25() {
    this.filterCounts25 = !(this.filterCounts25);
    if(this.filterCounts25){
      this.filterCounts10=false;
      this.filterCounts50=false;
      this.filterCounts100=false;
      this.filterCounts250=false;
      this.filterCounts500=false;
      this.filterCounts1000=false;
    }
  }
  onFilterCounts50() {
    this.filterCounts50 = !(this.filterCounts50);
    if(this.filterCounts50){
      this.filterCounts25=false;
      this.filterCounts10=false;
      this.filterCounts100=false;
      this.filterCounts250=false;
      this.filterCounts500=false;
      this.filterCounts1000=false;
    }
  }
  onFilterCounts100() {
    this.filterCounts100 = !(this.filterCounts100);
    if(this.filterCounts100){
      this.filterCounts25=false;
      this.filterCounts50=false;
      this.filterCounts10=false;
      this.filterCounts250=false;
      this.filterCounts500=false;
      this.filterCounts1000=false;
    }
  }
  onFilterCounts250() {
    this.filterCounts250 = !(this.filterCounts250);
    if(this.filterCounts250){
      this.filterCounts25=false;
      this.filterCounts50=false;
      this.filterCounts100=false;
      this.filterCounts10=false;
      this.filterCounts500=false;
      this.filterCounts1000=false;
    }
  }
  onFilterCounts500() {
    this.filterCounts500 = !(this.filterCounts500);
    if(this.filterCounts500){
      this.filterCounts25=false;
      this.filterCounts50=false;
      this.filterCounts100=false;
      this.filterCounts250=false;
      this.filterCounts10=false;
      this.filterCounts1000=false;
    }
  }
  onFilterCounts1000() {
    this.filterCounts1000 = !(this.filterCounts1000);
    if(this.filterCounts1000){
      this.filterCounts25=false;
      this.filterCounts50=false;
      this.filterCounts100=false;
      this.filterCounts250=false;
      this.filterCounts500=false;
      this.filterCounts10=false;
    }
  }

  onFilterReviewedStatus() {
    this.filterReviewedStatus = !(this.filterReviewedStatus);
  }
  onFilterReviewedStatusP() {
    this.filterReviewedStatusP = !(this.filterReviewedStatusP);
    if (this.filterReviewedStatusP) {
      this.filterReviewedStatusR = false;
      this.filterReviewedStatusB = false;
    }
  }
  onFilterReviewedStatusR() {
    this.filterReviewedStatusR = !(this.filterReviewedStatusR);
    if (this.filterReviewedStatusR) {
      this.filterReviewedStatusB = false;
      this.filterReviewedStatusP = false;
    }
  }
  onFilterReviewedStatusB() {
    this.filterReviewedStatusB = !(this.filterReviewedStatusB);
    if (this.filterReviewedStatusB) {
      this.filterReviewedStatusR = false;
      this.filterReviewedStatusP = false;
    }
  }
  onReviewedBy() {

  }

  onFilterAI() {
    this.filterAI = !(this.filterAI);
  }
  startDate;
  endDate;

  onFilterAccounts() {
    this.filterAccounts = !(this.filterAccounts);
  }
  onAccounts() {
    console.log('aaa')
  }
  onFilterCreated() {
    this.filterCreated = !(this.filterCreated);
  }
  onFilterCancel() {
    this.filterClicked = false
  }
  onFilterApply() {
    this.filterClicked = false
  }
  onFilterPrevPage(){

  }
  onFilterNextPage(){
    
  }

}
