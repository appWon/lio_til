# 1. enum 보다 union type을 사용
[타입스크립트 플레이그라운드](https://www.typescriptlang.org/play)
타입스크립트를 사용하는 이유는 여러 이유가 있지만 코드에 정적인 타입을 지정하여 어떤 타입의 데이터를 사용하는지 코드만 보고 확인을 할 수 있다.

그리고 이러한 작업은 개발을 진행중 일 때만 영향을 주기 때문에 컴파일을 하면 타입을 지정한 코드는 사라지게 된다.
```typescript
//컴파일 전
enum UserEnum {
    name,
    age,
    adress
}

type UserUnionType = "name" | "age" | "adress"
```
``` typescript
// 컴파일 후
var UserEnum;
(function (UserEnum) {
    UserEnum[UserEnum["name"] = 0] = "name";
    UserEnum[UserEnum["age"] = 1] = "age";
    UserEnum[UserEnum["adress"] = 2] = "adress";
})(UserEnum || (UserEnum = {}));
```
위의 코드를 보면 **UserUnionType** 타입선언은 트랜스파일 후 코드가 없어졌지만 enum은 객체이기 때문에 enum으로 선언한 **UserEnum**은 트랜스파일 후에도 코드가 선언문으로 남아있다.

> const enum UserEnum { }

위 처럼 앞에 const 를 사용한다면 트랜스파일 후에는 type 선언과 동일하게 사라지는거는 볼 수 있지만, 성능적 측면에서 **트리쉐이킹**을 사용할 수 없다.

```typescript
const enum user {
    "top" = 1,
    "right" = 2,
    "header" = "머리"
}
```
타입스크립트에서 enum 사용은 런타임 환경에서 장점을 취하는게 아니라면 사용하지 않는 것을 권하고 있다.

# 2. index signature 보다 mapped type 사용을 하자
이번 주제를 생각하기 전에 우선 타입스크립트를 사용하는 목적을 다시한번 생각하는 것이 중요하다.

``` typescript
const USERS_MONEY: { [user: string]: number } = {
  jaewon: 1000,
  lio : 2000	
}

const USERS_MONEY: { [user in Users]: number } = {
  jaewon: 1000,
  lio : 2000	
}
```

정적인 데이터는 최대한 mapped type 을 사용함으로써 실수를 방지하자.

# 3. 타입가드
타입가드는 변수에 들어오는 데이터가 정해져 있지 않고 동적일 경우 사용을 합니다.
``` typescript
function(data: number | string){
   switch(typeof data) {
     case "number":
       return '넘버'
     case "string":
       return '스트링'
   }
}
```
이렇게 정적인 데이터가 아닌 여러 형태의 타입을 가진 데이터 변수가 있을 경우 **if , switch** 를 사용하여 분기를 시켜준다.

``` typescript
interface Jaewon {
  type: "Jaewon";
  age: number;
  price: 2000;
}

interface Lio {
  type: "Lio";
  age: number;
  price: 2000;
}

function(data: Jaewon | Lio){
   switch(data.type) {
     case 'jaewon':
       return data.age
     case 'lio':
       return data.age
   }
}
```

이번에는 타입스크립트 3.7 이후 추가된 assert  이다
``` typescript
function assert(condition: any, msg?: string): asserts condition {
  if (!condition) throw new Error(msg)
}

function stringData(data) { 
  assert(typeof str === "string", "string 타입이 아닙니다.")
  return data
}

function notUndefined(data) { 
  assert(typeof str != undefined)
  return data
}
```

위 코드는 assert 라는 타입가드 함수를 만들어 사용하는 것이다. 이 처럼 assert 함수를 이용한다면 동적으로 타입을 처리할 수 있을 뿐만 아니라 특정 데이터에 대한 가드도 가능하다.
