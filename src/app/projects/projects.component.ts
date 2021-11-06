import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  buttons = [
    {
      "name": "all",
      "isActive": true
    },
    {
      "name": "angular",
      "isActive": false,
    },
    {
      "name": "js",
      "isActive": false,
    }
  ];

 projects = [
   {
     "type": "angular",
     "isActive": true,
   },
   {
     "type": "js",
     "isActive": true,
   }
 ];  

 moveUpAnimation = false;
  

  filterProjects(type: string) {
    this.moveUpAnimation = true;
    
    this.setActiveButton(type);

    setTimeout(() => {
      this.setProjectState();
      this.moveUpAnimation = false;
    }, 225);
  }

  

  setProjectState(){
    for (let i = 0; i < this.projects.length; i++) {
      const project = this.projects[i];
      if (this.buttons[i + 1]['isActive'] || this.buttons[0]['isActive']) {
        project.isActive =  true;
      }
      else{
        project.isActive = false;
      }
     
    }
  }

  setActiveButton(type: string) {
    this.buttons.forEach(button => {
      if(button['name'] == type){
        button['isActive'] = true;
      }
      else{
        button['isActive'] = false;
      }
    });
  }
}

