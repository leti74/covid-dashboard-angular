import { Component } from '@angular/core';
import { MatIconModule } from  '@angular/material/icon' ;
 import { MatButtonModule, MatIconButton } from  '@angular/material/button' ;
 import { MatToolbarModule } from  '@angular/material/toolbar' ;
 import {MatMenuModule} from '@angular/material/menu'
 import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatMenuModule, RouterLink, MatIconModule, CommonModule, MatIconButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  scrollToSearch(){
    const element= document.getElementById('stateSearchInput')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.focus();} // mette il focus sull'input
  }


}
