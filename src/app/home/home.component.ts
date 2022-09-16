import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show1 : Boolean;
  show2 : Boolean;

  show3 : Boolean;

  constructor() {
    this.show1=false;
    this.show2=false;
    this.show3=false;
   }
   
showpic1(show2 : Boolean ){
  
  
    this.show1=show2;
   
    // setTimeout(function() {
    //   show2}, 3000);  
}
showpic2(show2 : Boolean ){
  
  
  this.show2=show2;
 
  
}
showpic3(show2 : Boolean ){
  
  
  this.show3=show2;
 
   
}

  ngOnInit(): void {
    // $("#Btn").on('click', function (evt) {  // Jquery is imported in index.html
    //   $("#flip").slideToggle("medium")
    // });
    
    // $("div.features-post").on('hover', function (evt) {
    //         $(this).find("div.content-hide").slideToggle("medium");
    //     });  
    
        // (function($) {
        //   $("div.features-post").hover(
        //    function() {
        //        $(this).find("div.content-hide").slideToggle("medium");
        //    },
        //    function() {
        //        $(this).find("div.content-hide").slideToggle("medium");
        //    }
        //  );
        //  })(jQuery);
        

  }
 

 
//  (function($) {
//  $("div.features-post").hover(
//   function() {
//       $(this).find("div.content-hide").slideToggle("medium");
//   },
//   function() {
//       $(this).find("div.content-hide").slideToggle("medium");
//   }
// );
// })(jQuery);

}


