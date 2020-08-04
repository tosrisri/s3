import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: string = 'Experience';
  ExpExcert: string = `With 8 years hands-on experience in the field of User Experience and User
  Interface Design with involvement in all the phases of SDLC I've successfully delivered more than 10
  exterprise level web applications and 50+ mid to small projects from start to finish.`;

  companies = [
    { "year": 2020, "role": "Freelance UX & UI Consultant", "company": "AMAL College"  },
    { "year": 2019, "role": "Contract UX & UI Consultant", "company": "Neudesic"  },
    { "year": 2018, "role": "Sr. Product Designer", "company": "West Agile Labs"  },
    { "year": 2017, "role": "UX & UI Consultant", "company": "Comcast Communications"  },
    { "year": 2016, "role": "UX & UI Architect", "company": "Wipro Technologies"  },
    { "year": 2010, "role": "Web Developer", "company": "Impelsys India P Ltd."  }
  ];;

  
  disciplines = ['Animation', 'Branding', 'Concepting & Ideation', 'Creative Strategy', 'End-to-end Product Design', 'Human Computer Interaction', 'Interaction Design', 'Mobile Design', 'Prototyping', 'Responsive Web Development', 'Storyboarding', 'Task Flows', 'User Experience', 'User Interaction', 'User Research & Testing', 'Web Design','Wireframing'];

  tools = ['Adobe Photoshop','Adobe XD','Agile','Angular 6','Balsamiq','Figma','GitHub','HTML5 & CSS3','Invision','JIRA','JavaScript','Rally','Sketch','Web Accessiblity','WordPress','Zeplin','jQuery'];

  constructor() { }

  ngOnInit() {
  }

}