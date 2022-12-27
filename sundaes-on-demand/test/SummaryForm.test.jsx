import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("체크박스와 버튼 초기 상태", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("체크박스 클릭 시, 버튼 활성화 여부 변경", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  await user.click(checkbox); // user는 Promise를 반화하기 때문에 반드시 await 키워드를 붙여줘야 한다.
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test("마우스 커서를 위로 올렸을 때 팝오버 호출", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // 마운트 되었을 때, 팝 오버는 보이지 않음
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // 마우스가 체크박스 라벨 위로 올라갔을 때, 팝오버가 나타남
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(popover).toBeInTheDocument();

  // 마우스가 해당 위치를 벗어나면 팝오버는 사라짐
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
