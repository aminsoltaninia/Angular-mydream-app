// component server zirmajmoeye app hast . va html va css va file ts daere
// in component ro ham mese app bayad ye seri chiaro import konim behesh
import{Component} from "@angular/core";

// selector : app-server => harja bekhaim az in component estefade konim va kole file html ro neshon bedim az in selectro estefade mishe
// ke baes mishe file => ./server.component.html  neshon dade beshe 
// va css hash ham az inja load mishe  ['./server.component.css']

// baraye estefade az har component bayad hatmna dakhele app.module.ts  tarifesh konim

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
  })
export class serverComponent{
  id : number = 50 ;
  status : string = 'active'
  allowButton = false;
  serverCreatedText = 'isnt server yet';
  serverName = '';
  constructor(){
    setTimeout(()=>{
         this.allowButton=true;  
    },2000)
  }

  onCreatedServer(){
    this.serverCreatedText='server is add';
  }
  onUpdateServerName(event : any){
   // console.log(event);
   this.serverName = event.target.value;// meghdare nahaii eke to event hst zakhire shode hast 
  }
}
