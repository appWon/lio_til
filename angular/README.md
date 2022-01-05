# 부모 <-> 자식  data binding

1. 부모에서 자식 컴포넌트로 데이터 전달 **@Input()** 데코레이더 활용

   ```typescript
   // 자식 컴포넌트
   import { Component, OnInit, Input } from '@angular/core';
   
   @Component({
     selector: 'app-child-directive',
     template: `
       <div>
         <div>child Input Data</div>
         <div>{{ setData }}</div>
       </div>
     `,
   })
   export class ChildComponent implements OnInit {
     @Input() setData: string;
   
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
         <app-child-directive [setData]="parentsData"></app-child-directive>
       </div>
     `,
   })
   export class HomeComponent implements OnInit {
     parentsData: '넘겨준데이터';
     
     constructor() {}
     ngOnInit(): void {}
   }
   ```

   

   **[ ] ** 를 사용하지 사용하지 않은 위의 " 넘겨준데이터 " 는 property 값으로 취급하지 않고 문자열로 취급한다.

   

2. 자식에서 부모 컴포넌트로 데이터 전달 **@Output()** 데코레이더 활용

   ```typescript
   // 자식컴포넌트
   import { Component, OnInit, Output, EventEmitter } from '@angular/core';
   
   @Component({
     selector: 'app-child-directive',
     template: `
       <div>
         <input type="text" #childData />
         <button (click)="onClick(childData.value)">클릭</button>
       </div>
     `,
   })
   export class ChildComponent implements OnInit {
     @Output() getData = new EventEmitter<string>();
   
     onClick(value: string) {
       this.getData.emit(value);
     }
   
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
         <app-child-directive
           (getData)="onClickChildData($event)"
         ></app-child-directive>
         <div>{{ getFromChildData }}</div>
       </div>
     `,
   })
   export class HomeComponent implements OnInit {
     getFromChildData: string = '';
   
     onClickChildData(value: string) {
       this.getFromChildData = value;
     }
   
     constructor() {}
     ngOnInit(): void {}
   }
   ```

   # HostListener

```typescript
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @HostListener('click')
  clicked() {
    console.log('this component');
  }

  @HostListener('document:click')
  docunent() {
    console.log('document');
  }
}
```

Angular 에서 **EventListener**를 사용하고 싶을 때! **HostListener** 를 사용하면 된다. **EventListener** 처럼 component가 사라질 때 일일이 제거하지 않아도 **HostListener** 를 사용하면 자동적으로 메모리에서 제거를 시켜준다.