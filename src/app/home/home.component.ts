import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Image } from '../support/model/model';
import { ImageService } from '../support/services/services.service';
import { Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild('app-home', { static: true }) masonry!: ElementRef;
  img_array?:Image[];
  isTrue:any;
  isTrue2:any;
  urlVal:any;
  urlName:any;
  constructor(public imgService:ImageService, public rtr:Router) { }

  ngOnInit(): void {
   this.isTrue=false
this.isTrue2=false
this.urlName='';
    this.urlVal='';
    this.imgService.get_all()
    .subscribe(
       data => {  
         this.img_array = data
         console.log(this.img_array)
       },
       error => {
         console.log(error);
       });    




       var $cell = $('.image__cell');

       $cell.find('.image--basic').click(function() {
         var $thisCell = $(this).closest('.image__cell');
       
         if ($thisCell.hasClass('is-collapsed')) {
           $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed');
           $thisCell.removeClass('is-collapsed').addClass('is-expanded');
         } else {
           $thisCell.removeClass('is-expanded').addClass('is-collapsed');
         }
       });
       
       $cell.find('.expand__close').click(function() {
         var $thisCell = $(this).closest('.image__cell');
         $thisCell.removeClass('is-expanded').addClass('is-collapsed');
       });

  }


 add()
 {
  this.rtr.navigate(['add']);
 } 
 img_event(val:any,name:any){
  this.isTrue=true
  this.urlVal=val;
  this.urlName=name;
  console.log("val=",val)
 }
close(){
  this.isTrue=false
}

}
