## Flow Test - 체크박스가 버튼의 활성화 여부 제어

1. 체크박스 클릭
2. 버튼 활성화
3. 체크박스 클릭
4. 버튼 비활성화

<br />

## fireEvent and userEvent

<br />

클릭을 하는 경우 `fireEvnet`를 사용하는 것도 좋지만, 공식 홈페이지에서는 `@testing-library/user-event`를 사용하는 것이 더 좋다고 말하고 있다.

- userEvent는 user-event를 시뮬레이션하며, fireEvent 보다 완전하고 현실적이다.
- 14버전을 사용하기를 권장한다.

<br />

fireEvent는 DOM 이벤트를 디스패치하고, 컴퓨터 이벤트를 시뮬레이션하는 방법이기 때문에 사용자 user-event에는 맞지 않을 수 있다. 반면에 userEvent는 모든 상호작용을 시뮬레이션하기 때문에, 실제 상호작용에 대해 보다 완전한 시뮬레이션을 제공한다.

<br />

**userEvent는 fireEvent와 다르게 구축 과정이 필요하다.**

<br />

`userEvent`를 사용할 때는 `setup()`메서드로 세션을 시작해야 한다.

```js
const user = userEvent.setup();

await user.keyboard("[ShiftLeft>]");
await user.click(element);
```

`setup()` 메서드의 출력값을 `user` 객체로 정의한 다음 `user` 객체에서 `userEvent` 시뮬레이션 메서드를 실행한다.

<br />

**`user`로 가져온 모든 메서드는 반드시 `Promise`를 반환한다.**

<br />

14버전 이후에서는 user-event API는 항상 Promise를 반환한다. 그렇기 때문에 사용할 때마다 `awiat`키워드를 사용해 API 종료를 대기하도록 해야, 그 후에 단언문을 실행할 수 있다. 만약에 사용하지 않는다면, Assertion(단언)이 이벤트가 끝나는 것을 기다리지 않고 진행되어 원하는 동작이 구현되지 않는다.

<br />

## Screen Query

**command[All]ByQueryType**

<br />

✔️ command

- get : expect element to be in DOM (요소가 DOM 안에 있는 경우)
- query : expect element not to be in DOM (요소가 DOM 안에 없는 경우)
- find : expect element to appear async (요소가 비동기적으로 나타날 경우)
  - DOM에 비동기적인 업데이트가 있고, 단언 실행 전 그들 중 하나를 기다리고자 할 때 사용

<br />

✔️ [All]

- (exclude) expect only one match
- (include) expect more than one match

<br />

✔️ QueryType : 무엇으로 검색을 하는지를 의미

- Role(most preferred) : 코드의 접근성을 보장하기 위해서 가장 선호되는 방법
- AltText(images)
- Text(display elements) : 특정한 역할이 없거나 비상호작용적인 디스플레이 요소에 대해 사용
- Form elements
  - PlaceholderText
  - LabelText
  - DisplayValue

<br />

EX) getAllByText, findByAltText, QueryAllByLabelText …

<br />

### 마운트 될 때, 나오지 않아야 하는 요소 테스트

- queryByText
- expect().not.toBeInTheDocument()
