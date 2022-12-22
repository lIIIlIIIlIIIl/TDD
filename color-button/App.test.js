import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

describe("빨강, 파랑 버튼과 체크박스", () => {
  test("버튼 초기 색상이 바른지 확인하고, 클릭 시 업데이트", () => {
    render(<App />);

    // find an element with a role of button and text of 'Change to blue'
    const colorButton = screen.getByRole("button", { name: "Change to blue" });

    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    // click button
    fireEvent.click(colorButton);

    // expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

    // expect the button text to be 'Change to red'
    expect(colorButton).toHaveTextContent("Change to red");
  });

  test("초기 상태", () => {
    render(<App />);

    // 버튼이 활성화 상태로 시작하는지 확인
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toBeEnabled();

    // 체크박스가 체크되지 않은 상태인지 확인
    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).not.toBeChecked();
  });

  test("체크박스의 체크 여부에 따른 버튼 활성 여부 변경", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

    // 체크 박스 클릭 시, 버튼 비활성화
    fireEvent.click(checkBox);
    expect(colorButton).toBeDisabled();

    // 체크 박스 클릭 시, 버튼 활성화
    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
  });

  test("버튼이 비활성화 된 경우, 배경색이 회색으로 바뀌기", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

    // 체크박스가 채크 된 경우에는 버튼의 배경색이 회색, 체크가 되지 않은 경우에는 버튼의 배경색이 빨강
    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    // 체크박스가 채크 된 경우에는 버튼의 배경색이 회색, 체크가 되지 않은 경우에는 버튼의 배경색이 파랑
    fireEvent.click(colorButton);

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle("backgroundColor: gray");

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle("backgroundColor: blue");
  });
});

// 함수에 대한 테스트
describe("카멜 케이스의 대문자 앞에 공백두기", () => {
  test("중간에 대문자가 없는 경우", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("중간에 대문자가 한 개 있는 경우", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("중간에 대문자가 두 개 있는 경우", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

describe("MediumVioletRed and MidnightBlue Button, CheckBox ", () => {
  test("버튼의 초기 상태", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
      name: "Change to Midnight Blue",
    });

    const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
    // 버튼 초기 색상이 MediumVioletRed 인지 확인
    expect(colorButton).toHaveStyle("backgroundColor : MediumVioletRed");

    // 버튼이 활성화 상태로 시작되는지 확인
    expect(colorButton).toBeEnabled();

    // 체크박스가 비활성화 상태로 시작되는지 확인
    expect(checkBox).not.toBeChecked();
  });

  test("버튼 클릭 시, 색상 및 텍스트 변경", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
      name: "Change to Midnight Blue",
    });
    // 버튼 클릭
    fireEvent.click(colorButton);

    // 버튼의 배경색이 MidnightBlue 인지 확인
    expect(colorButton).toHaveStyle("backgroundColor : MidnightBlue");

    // 버튼의 텍스트가 Change to Medium Violet Red 인지 확인
    expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
  });

  test("체크박스의 체크 여부에 따른 버튼 활성 여부 변경", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
      name: "Change to Midnight Blue",
    });

    const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

    // 체크박스를 클릭하면 버튼 비활성화
    fireEvent.click(checkBox);
    expect(colorButton).toBeDisabled();

    // 체크박스를 클릭하면 버튼 활성화
    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
  });
  test("버튼이 비활성화 된 경우, 배경색이 회색으로 바뀌기", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", {
      name: "Change to Midnight Blue",
    });

    const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle("backgroundColor : gray");

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle("backgroundColor : MediumVioletRed");

    fireEvent.click(colorButton);

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle("backgroundColor : gray");

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle("backgroundColor : MidnightBlue");
  });
});
