import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css']
})
export class FictionComponent implements OnInit {
  books = "";
  id : string[] = [];
  name : string[] = [];
  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.http.get("http://skunkworks.ignitesol.com:8000/books/").subscribe((data)=>{
      this.books = JSON.stringify(data);
      for(let i=0; i< JSON.parse(this.books).results.length; i++){
        if(JSON.parse(this.books).results[i].authors[0].name)
          this.id.push(JSON.parse(this.books).results[i].authors[0].name);
          this.name.push(JSON.parse(this.books).results[i].title);
      }
    })
    console.log(this.id);
    console.log(this.name);  
  }

  callBook(val: any){
    console.log(val.id)
  }

}
