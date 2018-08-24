import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  


@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {
  elementType = 'url';
  value = 'Techiediaries';
  testUrl = '/assets/images/invite_sample.jpg'

  constructor() { }

  ngOnInit() {
  }

  public captureScreen()  
  {  
    var data = document.getElementById('invitation-content');  
    const pdf = new jspdf('p', 'mm', 'a4');
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
      const elementToPrint = document.getElementById('foo'); //The html element to become a pdf
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, 50, 50);
      pdf.addImage(dataUrl, 'PNG', 50, position, imgWidth, imgHeight);
      pdf.save('test.pdf'); // Generated PDF   
      // pdf.addHTML(data, () => {
      //     pdf.save('web.pdf');
      // },  position, imgWidth, imgHeight);
    });  
  }  


}