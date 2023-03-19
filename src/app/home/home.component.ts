import { Component } from '@angular/core';
import { Organisations } from '../Organisations';
import { OrganisationsService } from '../organisations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mail:string="";

 // campaignData=[
 //   {name:"350.org",description:"A global grassroots movement to end the use of fossil fuels and build a just, sustainable future for all. Organizes campaigns, demonstrations, and direct actions to pressure governments and corporations to take action on climate change. |"},
 //   {name:"Climate Reality Project",description:" A nonprofit organization founded by former Vice President Al Gore to mobilize action on climate change. Offers training and education programs for individuals and organizations to become climate leaders and advocates."}
  //  ,{name:"Project Drawdown",description:" A nonprofit organization dedicated to identifying and promoting the most effective solutions to reverse global warming.  Conducts comprehensive research on climate solutions, evaluating their potential impact and feasibility. "}
  //]

  flag:boolean=false;

  orgData: Organisations[]=[];

  constructor(private organisationsService: OrganisationsService){}
  dispOrg(){
    this.orgData=this.organisationsService.readOrgArr();
    this.flag=true;
  }

  hideOrg(){
    this.flag=false;
  }

  strFontSize:string="20";

  nData:number=16;

  currDate:Date= new Date();
}
