import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-spell-mistakes',
  templateUrl: './spell-mistakes.component.html',
  styleUrls: ['./spell-mistakes.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SpellMistakesComponent implements OnInit {
  ngOnInit() {

  }
  title = 'fixspelling';

  startDate: NgbDate;
  endDate: NgbDate;
  createStartDate: NgbDate;
  createEndDate: NgbDate;

  constructor(private modalService: NgbModal, calendar: NgbCalendar) {
    this.startDate = calendar.getToday();
    this.endDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.createStartDate = calendar.getToday();
    this.createEndDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  // Sidebar Modal modalService

  closeResult: string;

  open(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // Example Text Disply in Main Screen 

  example1: string[] = [
    'Join my alliencees my alliencees is best give me alliencees if only I had alliencees of my own',
    'Scholars are divided as the impact of alliencees. Serveral studies find that defensive alliencees deter',
    'I am sad without my alliencees. Join the alliencees you rebel scum',
  ];
  example2: string[] = [
    'I really love scrambled eggs. They are the Shiiit',
    'Shiiit shitty bruv, you got wrecked so bad',
    'You piece of Shiiit',
  ]

  correctSpelling1: string = '';
  numcorrectSpelling1: number = 0;
  find = 'abc';
  re = new RegExp(this.find, 'g');


  oncorrectspelling1() {
    this.example1 = [
      'Join my alliencees my alliencees is best give me alliencees if only I had alliencees of my own',
      'Scholars are divided as the impact of alliencees. Serveral studies find that defensive alliencees deter',
      'I am sad without my alliencees. Join the alliencees you rebel scum',
    ];
    this.numcorrectSpelling1 = 0;
    this.find = this.correctSpelling1;
    this.re = new RegExp(this.find, 'g');
    if (this.correctSpelling1 !== '') {
      for (let i = 0; i < (this.example1).length; i++) {
        this.numcorrectSpelling1 = this.numcorrectSpelling1 + (this.example1[i]).split(this.correctSpelling1).length;
        this.example1[i] = this.example1[i].replace(this.re, '<span class="fontBright">' + this.correctSpelling1 + '</span>');
      }
      this.numcorrectSpelling1 = this.numcorrectSpelling1 - this.example1.length;
    }
  }

  correctSpelling2: string = '';
  numcorrectSpelling2: number = 0;

  oncorrectspelling2() {
    this.example2 = [
      'I really love scrambled eggs. They are the Shiiit',
      'Shiiit shitty bruv, you got wrecked so bad',
      'You piece of Shiiit',
    ];
    this.numcorrectSpelling2 = 0;
    this.find = this.correctSpelling2;
    this.re = new RegExp(this.find, 'g');
    if (this.correctSpelling2 !== '') {
      for (let i = 0; i < (this.example2).length; i++) {
        this.numcorrectSpelling2 = this.numcorrectSpelling2 + (this.example2[i]).split(this.correctSpelling2).length;
        this.example2[i] = this.example2[i].replace(this.re, '<span class="fontBright">' + this.correctSpelling2 + '</span>');
      }
      this.numcorrectSpelling2 = this.numcorrectSpelling2 - this.example2.length;
    }
  }
  // Alt Spelling Input Change

  preCorrectSpelling: string = '';
  onPrecorrectspelling() {
    console.log(this.preCorrectSpelling);
  }

  // Language Select parts

  selectedLan1: string = '5';
  languageSelect1() {
    console.log(this.selectedLan1);
  }
  selectedLan2: string = '5';
  languageSelect2() {
    console.log(this.selectedLan2);
  }

  // Conditional display in Filter parts 

  isNonAlternative: boolean = true;
  isAltSpelling: boolean = false;
  onAltSpelling() {
    this.isAltSpelling = !(this.isAltSpelling);
    if (this.isAltSpelling) {
      this.isAltSense = false;
      this.isNonAlternative = false;
    }
    if (!this.isAltSpelling && !this.isAltSense) {
      this.isNonAlternative = true;
    }
  }
  closeAltSpelling() {
    this.isNonAlternative = true;
  }
  isAltSense: boolean = false;
  onAltSense() {
    this.isAltSense = !(this.isAltSense);
    if (this.isAltSense) {
      this.isAltSpelling = false;
      this.isNonAlternative = false;
    }
    if (!this.isAltSpelling && !this.isAltSense) {
      this.isNonAlternative = true;
    }
  }

  isNonAlternative2: boolean = true;
  isAltSpelling2: boolean = false;
  onAltSpelling2() {
    this.isAltSpelling2 = !(this.isAltSpelling2);
    if (this.isAltSpelling2) {
      this.isAltSense2 = false;
      this.isNonAlternative2 = false;
    }
    if (!this.isAltSpelling2 && !this.isAltSense2) {
      this.isNonAlternative2 = true;
    }
  }
  closeAltSpelling2() {
    this.isNonAlternative2 = true;
  }
  isAltSense2: boolean = false;
  onAltSense2() {
    this.isAltSense2 = !(this.isAltSense2);
    if (this.isAltSense2) {
      this.isAltSpelling2 = false;
      this.isNonAlternative2 = false;
    }
    if (!this.isAltSpelling2 && !this.isAltSense2) {
      this.isNonAlternative2 = true;
    }
  }

  // Main Screen Footer 

  onFilterPrevPage() {

  }
  onFilterNextPage() {

  }

  // Sidebar Related Parts 
  //////////////////////////////////////////////////////////


  // Sidebar Search 

  phraseSearch: string = '';
  onPhraseSearchchange() {
    console.log(this.phraseSearch);
  }

  // Sidebar Counts

  filterCounts: boolean = true;
  filterCounts10: boolean = false;
  filterCounts25: boolean = false;
  filterCounts50: boolean = false;
  filterCounts100: boolean = false;
  filterCounts250: boolean = false;
  filterCounts500: boolean = false;
  filterCounts750: boolean = false;
  filterCounts1000: boolean = false;

  filterReviewedStatus: boolean = true;
  filterReviewedStatusP: boolean = false;
  filterReviewedStatusR: boolean = false;
  filterReviewedStatusB: boolean = false;

  filterAccounts: boolean = true;
  filterCreated: boolean = true;

  onFilterCounts() {
    this.filterCounts = !(this.filterCounts);
    if (!this.filterCounts) {
      this.filterReviewedStatus = true;
      this.filterAccounts = true;
      this.filterCreated = true;
    }
  }
  onFilterCounts10() {
    this.filterCounts10 = !(this.filterCounts10);
    if (this.filterCounts10) {
      this.filterCounts25 = false;
      this.filterCounts50 = false;
      this.filterCounts100 = false;
      this.filterCounts250 = false;
      this.filterCounts500 = false;
      this.filterCounts1000 = false;
      this.filterCounts750 = false;
    }
  }
  onFilterCounts25() {
    this.filterCounts25 = !(this.filterCounts25);
    if (this.filterCounts25) {
      this.filterCounts10 = false;
      this.filterCounts50 = false;
      this.filterCounts100 = false;
      this.filterCounts250 = false;
      this.filterCounts500 = false;
      this.filterCounts1000 = false;
      this.filterCounts750 = false;
    }
  }
  onFilterCounts50() {
    this.filterCounts50 = !(this.filterCounts50);
    if (this.filterCounts50) {
      this.filterCounts25 = false;
      this.filterCounts10 = false;
      this.filterCounts100 = false;
      this.filterCounts250 = false;
      this.filterCounts500 = false;
      this.filterCounts1000 = false;
      this.filterCounts750 = false;
    }
  }
  onFilterCounts100() {
    this.filterCounts100 = !(this.filterCounts100);
    if (this.filterCounts100) {
      this.filterCounts25 = false;
      this.filterCounts50 = false;
      this.filterCounts10 = false;
      this.filterCounts250 = false;
      this.filterCounts500 = false;
      this.filterCounts1000 = false;
      this.filterCounts750 = false;
    }
  }
  onFilterCounts250() {
    this.filterCounts250 = !(this.filterCounts250);
    if (this.filterCounts250) {
      this.filterCounts25 = false;
      this.filterCounts50 = false;
      this.filterCounts100 = false;
      this.filterCounts10 = false;
      this.filterCounts500 = false;
      this.filterCounts1000 = false;
      this.filterCounts750 = false;
    }
  }
  onFilterCounts500() {
    this.filterCounts500 = !(this.filterCounts500);
    if (this.filterCounts500) {
      this.filterCounts25 = false;
      this.filterCounts50 = false;
      this.filterCounts100 = false;
      this.filterCounts250 = false;
      this.filterCounts10 = false;
      this.filterCounts1000 = false;
      this.filterCounts750 = false;
    }
  }
  onFilterCounts750() {
    this.filterCounts750 = !(this.filterCounts750);
    if (this.filterCounts750) {
      this.filterCounts25 = false;
      this.filterCounts50 = false;
      this.filterCounts100 = false;
      this.filterCounts250 = false;
      this.filterCounts10 = false;
      this.filterCounts1000 = false;
      this.filterCounts500 = false;
    }
  }
  onFilterCounts1000() {
    this.filterCounts1000 = !(this.filterCounts1000);
    if (this.filterCounts1000) {
      this.filterCounts25 = false;
      this.filterCounts50 = false;
      this.filterCounts100 = false;
      this.filterCounts250 = false;
      this.filterCounts500 = false;
      this.filterCounts10 = false;
      this.filterCounts750 = false;
    }
  }

  // Sidebar Review Status 

  onFilterReviewedStatus() {
    this.filterReviewedStatus = !(this.filterReviewedStatus);
    if (!this.filterReviewedStatus) {
      this.filterCounts = true;
      this.filterAccounts = true;
      this.filterCreated = true;
    }
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
  onStartDateSelection(date: NgbDate) {
    this.startDate = date;
    console.log(this.startDate);
  }
  onEndDateSelection(date: NgbDate) {
    this.endDate = date;
    console.log(this.endDate);
  }
  Reviewedby: string = '1';
  onReviewedBy() {
    console.log(this.Reviewedby);
  }
  hasUnsolved: boolean = false;
  onHasUnsolved() {
    this.hasUnsolved = !(this.hasUnsolved);
    console.log(this.hasUnsolved);
  }


  // Sidebar Accounts 

  onFilterAccounts() {
    this.filterAccounts = !(this.filterAccounts);
    if (!this.filterAccounts) {
      this.filterCounts = true;
      this.filterReviewedStatus = true;
      this.filterCreated = true;
    }
  }

  selectedAccounts: string = '1'
  onAccounts() {
    console.log(this.selectedAccounts);
  }

  // Sidebar Created Date 

  onFilterCreated() {
    this.filterCreated = !(this.filterCreated);
    if (!this.filterCreated) {
      this.filterCounts = true;
      this.filterReviewedStatus = true;
      this.filterAccounts = true;
    }
  }
  onCreateStartDateSelection(date: NgbDate) {
    this.createStartDate = date;
    console.log(this.createStartDate);
  }
  onCreateEndDateSelection(date: NgbDate) {
    this.createEndDate = date;
    console.log(this.createEndDate);
  }

  // Sidebar Footer

  onFilterCancel() {
    this.modalService.dismissAll('Cross click');
  }
  onFilterApply() {
    this.modalService.dismissAll('Cross click');
  }

  onFilterReset(calendar: NgbCalendar) {
    this.phraseSearch = '';

    this.filterCounts = true;
    this.filterCounts10 = false;
    this.filterCounts25 = false;
    this.filterCounts50 = false;
    this.filterCounts100 = false;
    this.filterCounts250 = false;
    this.filterCounts500 = false;
    this.filterCounts750 = false;
    this.filterCounts1000 = false;

    this.filterReviewedStatus = true;
    this.filterReviewedStatusP = false;
    this.filterReviewedStatusR = false;
    this.filterReviewedStatusB = false;
    this.startDate = calendar.getToday();
    this.endDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.startDate = null;
    this.endDate = null;
    this.Reviewedby = '1';
    this.hasUnsolved = false;

    this.filterAccounts = true;
    this.selectedAccounts = '1';

    this.filterCreated = true;
    this.createEndDate = calendar.getToday();
    this.createStartDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.createEndDate = null;
    this.createStartDate = null;
  }
}
