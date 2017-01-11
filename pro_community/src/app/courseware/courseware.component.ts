import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courseware',
  templateUrl: './courseware.component.html',
  styleUrls: ['./courseware.component.css']
})

@Injectable()
export class CoursewareService {
  }
}

export class CoursewareComponent implements OnInit {

  constructor(public id: number,
    public name: string,
    public description: string,
    public link: string,
    public file?: string) {

  }

  ngOnInit() {

  }

}
