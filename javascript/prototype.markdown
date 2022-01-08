# javascript

자바스크립트 Prototype 기반 언어라고.. 합니다.

> 프로토타입 기반 언어는 클래스 기반 언어에서 상속을 사용하는 것과는 다르게, 객체를 원형(프로토타입)으로 하는 복제 과정을 통해 객체의 동작 방식을 재사용 할 수 있게 한다.



#### 프로토타입 체인?? 링크??

이런 어려운 단어가 많지만 간단하게 예제를 통해서 쉽게 설명해 보겠습니다.

```typescript
function user(){
	this.name = 'lio'
	this.age = 28
}
```

유저가 있는데 **name = lio** , **age = 28** 인 사람이 있습니다.

````typescript
const clone1 = new user()

const clone2 = new user()
````

유저의 DNA를 이용하여 **clone1, clone2** 인간을 만들어 냅니다. 이 클론은 **user** 의 모든 정보를 가지고 있고, **prototype** 이라는것도 함께 생성을 합니다.



이 **prototype**은 그냥 **유전자** 라고 생각을 해주세요. 왜?? 유전자라고 했는 이유를 알려드리겠습니다.

````javascript
clone1.birthday = '1월 18일'

console.log(clone1.birthday) // 1월 18일
console.log(clone2.birthday) // undefinded
````

위 코드처럼 작성 후 출력하면, **clone1** 에서만 birthday가 출력하는 것을 볼 수 있습니다.

이번에는 위의 코드를 작성하지 않은 상태에서 다시 아래의 코드를 작성해보겠습니다.

````javascript
clone1.prototype.birthday = '1월 18일'

console.log(clone1.birthday) // 1월 18일
console.log(clone2.birthday) // 1월 18일
````

**prototype** 이라는 유전자를 통해서 birthday를 추가를 하고 출력을 해보니 **모든 clone** 에서 birthday가 출력을 할 수 있었습니다.

그리고 위의 상태에서 다시 **모든 클론** 을 출력해보겠습니다.

````javascript
console.log(clone1) // { name: lio, age: 28 }
console.log(clone2) // { name: lio, age: 28 }

console.log(clone1.birthday) // 1월 18일
console.log(clone2.birthday) // 1월 18일
````

이제 먼가 감이 오시나요?? 자바스크립트에서 자식인 **clone** 에서 데이터가 없다면 부모 **유전자** 에게 접근해서 가지고 옵니다. 부모 **유전자** 에게 데이터가 없으면, 그의 부모  **유전자** 게도 또 물어보고 물어 보고 또 물어보고 부모가 유전자가 없을 때까지 계속 불어 봅니다. 이걸 **프로토타입 체인** 이라고 합니다.

````javascript
const 개발팀 = ['닐','엘린','제이크','두기','미미','알렉스','리오']
const 개발팀 = new Array('닐','엘린','제이크','두기','미미','알렉스','리오')
````

위의 코드를 보면 **new Array()** 선언과 위의 **new user()** 선언 이 같다는 것을 느낄수 있습니다.

여기서 생각할 수 있는 것은 Array 를 이용하여 배열을 만들었을 때 우리가 선언도 하지 않은 함수를 사용할 수 있다는 것 입니다.

```javascript
개발팀.map
개발팀.filter
개발팀.some
등....

console.log(new Array()) // 아래에 [[ Prototype ]] 확인
```

위의 코드처럼 우리가 선언 하지도 않은 함수는  **프로토타입 체인** 을 통해서 부모의 **유전자**를 통해서 가져와 사용하기 때문에 별도로 선언하지 않아도 사용할 수 있었습니다.



이런식으로 **자바스크립트** 작동하기 때문에 자바스크립트는 **프로토타입** 기반 언어라고 합니다.
