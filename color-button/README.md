`render()`

- 인수로 제공하는 JSX(App component)에 관한 가상 DOM을 생성한다.
- 렌더링된 가상 DOM에 screen global 객체로 액세스 한다.

`getByRole` : name 옵션을 사용해 페이지에 엘리먼트를 참조하는지를 식별

**jest-dom**

- create-react-app과 제공되며 create-react-app과 함께 설치된다.
- setupTest.js 파일을 사용해 각 테스트 이전에 jest-dom을 가져온다. 즉 모든 테스트에서 jest-dom 매처를 사용할 수 있다.
- DOM을 기반으로 한 매처로, toBe와 toHaveLength, toBeInTheDocument, toBeVisible, toBeChecked 등이 있다.

just-dom assertions

- `toBe()`
- `toBeEnabled()`
- `toBeDisabled()`
- `toBeChecked()`
- `toHaveLength()`
- `toBeInTheDocument()`
- `toBeVisible()`
- 반대 기능의 단언이 없는 경우 앞에 `not`을 사용한다.

`fireEvent` : React의 테스트 라이브러리에서 가져온 객체로서 click과 같은 메서드를 포함하고 있다.
