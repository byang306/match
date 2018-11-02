import { Component } from '@angular/core';
import { appService} from './app.service';
import { HttpClient } from '@angular/common/http';
import { Time } from './time';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  time : any ;
  constructor(private svc : appService, private http : HttpClient){
    console.log("Got the service!");
  };
  ngOnInit(){
    this.time = this.http.get<Time>("https://unambiguous.herokuapp.com/api/hello/time",{responseType : "json"}).subscribe(
      response =>{
        this.time = response.data;
        console.log(this.time);
      }
    );
    
  }
}
