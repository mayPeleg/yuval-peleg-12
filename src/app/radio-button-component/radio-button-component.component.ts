import { Component, OnInit, Input, Output, EventEmitter,SimpleChanges } from '@angular/core';

@Component({
  selector: 'radio-button-component',
  templateUrl: './radio-button-component.component.html',
  styleUrls: ['./radio-button-component.component.scss']
})
export class RadioButtonComponentComponent implements OnInit {

  @Input() options : string[] = [];
  
  @Output() chosenOption : EventEmitter<string> = new EventEmitter();

  chosen : string = '';


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  checkChosen(option : string ) {
    return option === this.chosen;
  }


  clickOption(option : string) {
    this.chosen = option;
    this.chosenOption.emit(this.chosen);
  }

}
