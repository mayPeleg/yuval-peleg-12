import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'יובל פלג - בת מצווה';

  options : string[] = ['!ברור' , 'לצערי לא'];
  chosenOption : string = '';
  name : string = '';

  clickedSend : boolean = false;
  errorMessage  : string = '';

  API = 'https://script.google.com/macros/s/AKfycbzYauiRUTGxAs1kXy1V3sEc0zEYXaYS97Sjj3YoqvBZbYN09o6rHutnLwhluSWWl9CN/exec';
  formData = new FormData();

  getChosenOption(option : string) {
    this.chosenOption = option;
  }

  getName(e : string) {
    this.name = e;
  }

  postData = async () : Promise<any> => {
    console.log(this.formData);
    const response = await fetch(this.API, {
      method: 'POST',
      mode: 'no-cors',
      body: this.formData
    });
    return response.json();
  }


  sendData() {
    if(this.name !== '' && this.chosenOption !== '') {
      this.clickedSend = true;
      //let person = {Arrive : this.chosenOption,Name : this.name};
      this.formData.append( 'Name', this.name);
      this.formData.append('Arrive', this.chosenOption);
      this.postData();
    }
    else 
      this.errorMessage = 'יש למלא את כל הפרטים';
  }
}
