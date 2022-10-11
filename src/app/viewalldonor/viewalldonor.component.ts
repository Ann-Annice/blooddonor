import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewalldonor',
  templateUrl: './viewalldonor.component.html',
  styleUrls: ['./viewalldonor.component.css']
})
export class ViewalldonorComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewDonor().subscribe(
      (data)=>{
        this.donorData=data
      }
    )
  }

donorData:any=[]
  ngOnInit(): void {
  }

}
