import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId: number = 123456789;
    serverStatus: boolean = true;

    getServerStatus(){
        return this.serverStatus === true ? 'online' : 'offline';
    }
}