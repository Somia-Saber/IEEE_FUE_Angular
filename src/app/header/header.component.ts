import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import  {  Inject, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
    theme:Theme='light-theme';
    constructor(
      @Inject(DOCUMENT) private document:Document,
      private renderer:Renderer2
  
    ){}
  
  
    ngOnInit(): void {this.intiallizationTheme()}
    switchtheme(){
  
      this.document.body.classList.replace(this.theme ,
         this.theme==='light-theme' 
         ? (this.theme='dark-theme')
         :(this.theme='light-theme'));
    }
    
    intiallizationTheme=():void=>
    this.renderer.addClass(this.document.body,this.theme);
  
  } 
  
  export type Theme = 'light-theme'|'dark-theme';
