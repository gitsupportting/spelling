
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../_services/api.service';
@Component({
  selector: 'app-spell-mistake',
  templateUrl: './spell-mistake.component.html',
  styleUrls: ['./spell-mistake.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SpellMistakeComponent implements OnInit {

  title = 'fixspelling';

  startDate: NgbDate;
  endDate: NgbDate;
  createStartDate: NgbDate;
  createEndDate: NgbDate;
  iterates: any;
  altSenseNums: any;
  example: any;

  constructor(
    private modalService: NgbModal,
    calendar: NgbCalendar,
    private apiService: ApiService
  ) {
    this.startDate = calendar.getToday();
    this.endDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.createStartDate = calendar.getToday();
    this.createEndDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit() {
    // this.apiService.deleteInbox();
    this.iterates = [1, 2];
    // this.altSenseNums=[1,2,3,4,5,6];
    this.altSenseNums = [
      [
        { id: 1, text: "text1" },
        { id: 2, text: "text2" },
        { id: 3, text: "main3" },
        { id: 4, text: "text4" },
        { id: 5, text: "text5" },
        { id: 6, text: "text6" },
        { id: 7, text: "main7" },
        { id: 8, text: "text8" }
      ],
      [
        { id: 1, text: "text1" },
        { id: 2, text: "text2" },
        { id: 3, text: "main3" },
        { id: 4, text: "text4" },
        { id: 5, text: "text5" },
        { id: 6, text: "text6" },
        { id: 7, text: "main7" },
        { id: 8, text: "text8" }
      ],
    ],
      this.example = [
        [
          'Join my alliencees my alliencees is best give me alliencees if only I had alliencees of my own',
          'Scholars are divided as the impact of alliencees. Serveral studies find that defensive alliencees deter',
          'I am sad without my alliencees. Join the alliencees you rebel scum',
        ],
        [
          'I really love scrambled eggs. They are the Shiiit',
          'Shiiit shitty bruv, you got wrecked so bad',
          'You piece of Shiiit',
        ]
      ];
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




  correctSpelling: string[] = ['', ''];
  numcorrectSpelling: number[] = [0, 0];
  find = 'abc';
  re = new RegExp(this.find, 'g');


  oncorrectspelling(iterate) {
    this.example = [
      [
        'Join my alliencees my alliencees is best give me alliencees if only I had alliencees of my own',
        'Scholars are divided as the impact of alliencees. Serveral studies find that defensive alliencees deter',
        'I am sad without my alliencees. Join the alliencees you rebel scum',
      ],
      [
        'I really love scrambled eggs. They are the Shiiit',
        'Shiiit shitty bruv, you got wrecked so bad',
        'You piece of Shiiit',
      ]
    ];
    this.numcorrectSpelling[iterate] = 0;
    this.find = this.correctSpelling[iterate];
    this.re = new RegExp(this.find, 'g');
    if (this.correctSpelling[iterate] !== '') {
      for (let i = 0; i < (this.example[iterate]).length; i++) {
        this.numcorrectSpelling[iterate] = this.numcorrectSpelling[iterate] + (this.example[iterate][i]).split(this.correctSpelling[iterate]).length;
        this.example[iterate][i] = this.example[iterate][i].replace(this.re, '<span class="fontBright">' + this.correctSpelling[iterate] + '</span>');
      }
      this.numcorrectSpelling[iterate] = this.numcorrectSpelling[iterate] - this.example[iterate].length;
    }
  }

  // Alt Spelling Input Change

  preCorrectSpelling: string = '';
  onPrecorrectspelling() {
    console.log(this.preCorrectSpelling);
  }

  // Language Select parts
  selectedLan: string[] = ['5', '5'];
  languageSelect(iterate) {
    console.log(this.selectedLan[iterate]);
  }


  // Conditional display in Filter parts 

  isNonAlternative: boolean[] = [true, true];
  isAltSpelling: boolean[] = [false, false];

  onAltSpelling(iterate) {
    this.isAltSpelling[iterate] = !(this.isAltSpelling[iterate]);

    if (this.isAltSpelling[iterate]) {
      this.isAltSense[iterate] = false;
      this.isNonAlternative[iterate] = false;
    }
    if (!this.isAltSpelling[iterate] && !this.isAltSense) {
      this.isNonAlternative[iterate] = true;
    }
  }
  closeAltSpelling(iterate) {
    this.isNonAlternative[iterate] = true;
  }

  isAltSense: boolean[] = [false, false];

  onAltSense(iterate) {
    this.isAltSense[iterate] = !(this.isAltSense[iterate]);
    if (this.isAltSense[iterate]) {
      this.isAltSpelling[iterate] = false;
      this.isNonAlternative[iterate] = false;
    }
    if (!this.isAltSpelling[iterate] && !this.isAltSense[iterate]) {
      this.isNonAlternative[iterate] = true;
    }
  }
  onloadmore(iterate) {
    console.log(iterate);
  }
  onloadmoreText(iterate) {
    console.log(iterate);
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
    this.startDate = null;
    this.endDate = null;
    this.Reviewedby = '1';
    this.hasUnsolved = false;

    this.filterAccounts = true;
    this.selectedAccounts = '1';

    this.filterCreated = true;
    this.createEndDate = null;
    this.createStartDate = null;
  }

  removeIndox(ev, i) {
    console.log('this is tran data: ', ev, this.altSenseNums[i]);
    this.altSenseNums[i] = this.altSenseNums[i].filter(item => item !== ev);
  }
}
