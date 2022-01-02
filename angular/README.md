# Angular

1. 부모 자식 컴포넌트 데이터 전달 **@Input(), @Ouput()** 데코레이더 활용

   ```typescript
   // 자식 컴포넌트
   import { Component, OnInit, Input } from '@angular/core';
   
   @Component({
     selector: 'app-child-directive',
     template: `
       <div>
         <div>child Input Data</div>
         <div>{{ getData }}</div>
       </div>
     `,
   })
   export class ChildComponent implements OnInit {
     @Input() getData: string;
   
     constructor() {}
     ngOnInit(): void {}
   }
   ```

   ```typescript
   // 부모 컴포넌트
   import { Component, OnInit } from '@angular/core';
   
   @Component({
     selector: 'app-home',
     template: `
       <div>
         <app-child-directive getData="넘겨준데이터"></app-child-directive>
       </div>
     `,
   })
   export class HomeComponent implements OnInit {
     constructor() {}
     ngOnInit(): void {}
   }
   ```