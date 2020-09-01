import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = "Not created!";
  serverName = "TestServer";
  username="";
  serverCreated = false;
  clicked=false;
  clickedLog = []

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name es ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClicked(event:any) {
    const loggedValues = {
      registered: new Date(),
    }
    this.clickedLog.push(this.clickedLog.length + 1);
    this.clicked = !this.clicked;
  }

}
