import { Component, OnInit } from '@angular/core';

export interface Name {
  name: string;
}

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.scss'],
})
export class DirectiveTestComponent implements OnInit {
  nameArray: Name[] = [{ name: 'xyz' }, { name: 'yzx' }, { name: 'zxy' }];
  constructor() {}

  ngOnInit(): void {}
}
