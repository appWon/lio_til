# javascript

자바스크립트 Prototype 기반 언어이다.

> 프로토타입 기반의 언어는 객체를 class 상속과는 다르게 원형을 복제를 하는 방식으로 재사용할 수 있게 한다.

프로토타입은 프로토타입 링크와 오브젝트로 설명을 할 수가 있다.

#### 프로토타입 객체

자바스크립트에서 **원시타입** 인,  문자, 숫자, 불리언, null, undefinded를 제외한 모든 타입은 객체이다.

```javascript
typeof new Array // object
typeof new Object// object
```

 간단히 출력을 해보면 object 를 출력하는 것을 알 수 있고, 객체의 생성은 함수로 생성이 된다.

```javascript
const obj = {}
const obj = new Object()

const arr = []
const arr = new Array()
```

위 코드에서 함수를 이용해서 생성을 하지 않았다고 생각을 하여도, 자바스크립트 객체들은 함수를 통하여 생성이 된다.

그렇다면 객체들도 함수를 통하여 생성이 된다면 대체 함수에서는 어떤 일이 발생할까??

```javascript
const arr = new Array()
console.log(arr)
// []
// [[Prototype]]
// map, fill, filter
// ...
```

콘솔로그로 배열을 선언 했을 때 처럼 출력해보면  하나하나 펼쳐서 보면 정말 익숙한 단어들이 보일 것이다. 우리가 당연하게 생각하였고 그냥 막 사용하던 기능들이 Array 라는 함수에 미리 정의 되어 있었기 때문에 우리는 편하게 사용할 수 있었다.

```javascript
function user(){
	this.name = 'lio'
}
```



