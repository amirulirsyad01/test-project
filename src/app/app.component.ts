import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgSwitch } from '@angular/common';
import { NgSwitchCase } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavComponent } from "./fav/fav.component";
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from "./employee/employee.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [CommonModule, RouterOutlet, NgIf, NgSwitch, NgSwitchCase, NgFor, FormsModule, EmployeeComponent], // Include NgIf in the imports array
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-project';
  coursename = 'testing angular';

  firstName = 'amirul';
  lastName = 'irsyad';
  email = 'amirul@gmail.com';

  flag = false;

  myclass = "FR";

  greenColor = "green";

  show() : void{
    console.log('button being press');
  }

  showNgIf() : void{
    this.flag = !this.flag;
  }

  flagFor = false;

  showNgIfFor() : void{
    this.flagFor = !this.flagFor;
  }

  hide : boolean = false;

  showDetails() : void{
    this.hide = !this.hide;
  }

  onClick(e: { value: any; })
  {
    console.log(e.value);
  }

  message = " ";

  persons: any[] = [
    { name: 'Darwish', age: 30, country: 'France' },
    { name: 'Khaled', age: 27, country: 'Egypt' },
    { name: 'Jaco', age: 45, country: 'Canada' },
    { name: 'Malek', age: 6, country: 'Canada' },
    { name: 'Esraa', age: 25, country: 'Egypt' },
    { name: 'Sarah', age: 30, country: 'UK' },
  ];
  
  date = new Date();
}
