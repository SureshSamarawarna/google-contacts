import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {connectable} from "rxjs";

type Connection = {
  names:Array<{displayName:string}>
  phoneNumbers:Array<{value:string}>
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{


  connections: Array<Connection> =[];

  readonly apiUrl = 'https://people.googleapis.com/v1/people/me/connections?personFields=names,phoneNumbers&pageSize=2000';

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    const accessToken = localStorage.getItem("token");
    this.http.get<{connections:Connection[]}>(this.apiUrl,{
      headers: {
        "Authorization":"Bearer "+accessToken
      }
    }).subscribe(({connections}) => this.connections=connections);


    // {
      // for (const connection of connections) {
      //   console.log(connection.names[0].displayName,connection.phoneNumbers[0].value);
      // }
    // });

  }

}
