import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss'],
})
export class BaseComponentComponent implements OnInit {
  @Input() test = '';

  constructor() {}

  ngOnInit(): void {}
}
