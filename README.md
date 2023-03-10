# TDD(Test-Driven Development)

TDD는 코드를 작성하기 전에 테스트를 작성하고 테스트에 통과하도록 코드를 작성하는 것을 말한다. 이것을 흔히 **“red-green”** testing이라고 하는데, 코드를 작성하기 전에 테스트에 실패하는 **"red-test"** 를 먼저 실행하고 코드를 작성한 후에는 통과하는 테스트로 **“green-test”** 를 확인한다.

<br />

> Write “shell” function → Write tests → Tests fail → Write code → Tests Pass

<br />

### ❗️ 왜 TDD를 사용하는가?

---

1. 테스트를 작성하는 것이 프로세스의 한 부분으로 느끼는 방식에 차이가 있기 때문이다. 마지막에 해야하는 따분한 일이 아니라 코딩 프로세스의 일부이다.
2. 효율적이다. 코드를 작성하기 전에 테스트를 작성하면, 변경 사항이 생길 때마다 모든 테스트를 다시 실행해서 자동 회귀 테스트를 할 수 있다. 즉 변경 사항을 확인하기 위해 애플리케이션을 열고 수동으로 테스트할 필요가 없다.

<br />

### ❗️ RTL(React-Testing-Library)을 왜 사용할까?

---

- RTL은 테스트를 위한 가상 DOM을 생성하고 DOM과 상호작용하기 위한 유틸리티도 제공한다. 예를들어, DOM에서 요소를 찾을 수 있거나 클릭과 같은 요소와 상호작용 할 수 있다.
- 브라우저 없이도 테스트를 가능하게 한다.

<br />

### ❗️ Types of Tests

---

1. Unit Tests

   - 보통 함수나 별개의 React 컴포넌트 코드의 한 유닛 혹은 단위를 테스트한다.

2. Integration Tests(통합 테스트)
   - 여러 유닛이 함께 작동하는 방식을 테스트해서 유닛 간의 상호작용을 테스트한다.
   - 예를 들어, 컴포넌트 간의 상호작용 테스트, 마이크로 서비스 간의 상호작용 테스트
3. Functional Tests(기능 테스트)
   - 소프트웨어의 특정 기능을 테스트한다. 특정 코드의 함수가 아니라 소프트웨어의 일반적인 동작을 의미한다.
     → 일반적인 동작 : 데이터를 폼에 입력하고 제출을 클릭하면 소프트웨어가 특정 데이터 세트로 바르게 작동하는 기능을 확인
   - 코드가 아닌 동작을 테스트하는 것이다. 즉 내부 코드 구현을 테스트하는 것이 아니라 사용자의 소프트웨어 사용을 테스트 하는 것이다.
4. Acceptance(인수) / End-to-end (E2E) Tests
   - 해당 테스트는 실제 브라우저가 필요하고 애플리케이션이 연결된 서버가 필요하다.(Cypress, Selenium)
