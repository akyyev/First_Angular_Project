import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: FollowersService) { }

  followers: any[];

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    console.log('id', id);

    let page = this.route.snapshot.queryParamMap.get('page');
    console.log('page', page);
    
    this.service.getAll().subscribe( res => this.followers = res as any[]) 

  }
}
