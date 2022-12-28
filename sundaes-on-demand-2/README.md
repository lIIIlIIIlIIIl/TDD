## Mock Service Worker(MSW)

<br />

### MSW Handler

---

`rest.get(’http://localhost:3030/scoops’, (req, res, ctx) ⇒ {})`

- Handler Type : rest or graphQL

- HTTP method to mock : get, post, delete, patch…

- Full URL to mock : http://localhost:3030/scoops

- Response resolver function
  - req : request object
  - res : function to create response
  - ctx : utility yo build response

<br />
<br />

### Mock Service Worker in Tests

---

테스트 자체는 Service Worker가 네트워크 요청을 가로채도록 설정한 설정 파일의 Mock Service Worker에서 처리된다.

네트워크 요청을 생성할 위치는 옵션 컴포넌트에 있다. 따라서 이 테스트는 옵션 컴포넌트를 실행하고, 옵션 컴포넌트는 서버에 get 요청을 보낸다.

setUpTests.js 파일에서 MSW 설정을 하는 경우, 요청은 서버로 전해지지 않고 MSW가 요청을 가로채서 옵션 컴포넌트에 핸들러 응답을 반환하게 된다.

<br />
<br />

### Tip

---

- 비동기식으로 페이지에 나타날 비동기식 작업을 할 때에는 `await`과 `findBy`를 사용해야 한다.
- 숫자와 문자열의 경우 `toBe()` 매처를 사용한다.
- 배열과 객체의 경우 `toEqual()` 매처를 사용한다.

<br />
<br />

## Jest Debugging Tools

<br />

### 분리해서 테스트하기

---

- 하나의 테스트 파일만 실행하는 방법
  - npm test → ‘p’ → 파일 이름을 정규 표현식 패턴으로 필터링해서 실행
- 파일 내부에서 하나의 테스트만 실행하는 방법
  - test.only. : 테스트 실행 시, 해당 테스트만 검사
  - test.skip : 테스트 실행 시, 해당 테스트는 건너뜀

<br />

### waitFor()

---

제한 시간에 도달할 때까지 콜백을 여러 번 실행한다. API 호출에 대한 단위 데스트에서 Promise가 모두 해결될 때까지 기다려야 하는 경우에 유용하게 사용할 수 있다.
