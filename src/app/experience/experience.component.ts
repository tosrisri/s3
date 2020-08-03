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

  products = [
    { "id": 1, "name": "Licensed Frozen Hat", "description": "Incidunt et magni", "price": "170.00", "quantity": 56840 },
    { "id": 2, "name": "Rustic Concrete Chicken", "description": "Sint libero mollitia", "price": "302.00", "quantity": 9358 },
    { "id": 3, "name": "Fantastic Metal Computer", "description": "In consequuntur cupiditat", "price": "279.00", "quantity": 90316 },
    { "id": 4, "name": "Refined Concrete Chair", "description": "Saepe nemo praesentium", "price": "760.00", "quantity": 5899 }
  ];;

  // ExpArray = [
  //   { "year": 2020, "role": "Freelance UX &amp; UI Consultant", "company": "AMAL College"  },
  //   { "year": 2019, "role": "Contract UX &amp; UI Consultant", "company": "Neudesic"  },
  //   { "year": 2018, "role": "Sr. Product Designer", "company": "West Agile Labs"  },
  //   { "year": 2017, "role": "UX &amp; UI Consultant", "company": "Comcast Communications"  },
  //   { "year": 2016, "role": "UX &amp; UI Architect", "company": "Wipro Technologies"  },
  //   { "year": 2010, "role": "Web Developer", "company": "Impelsys India P Ltd."  }
  // ];;

  constructor() { }

  ngOnInit() {
  }

}