import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("각각의 Scoop Option의 이미지가 서버에 표시 여부", async () => {
  render(<Options optionType="scoops" />);

  // 이미지 찾기
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i }); // $ :문자열이 'scoop'으로 끝남
  expect(scoopImages).toHaveLength(2);

  // 이미지의 alt 텍스트
  const altText = scoopImages.map(el => el.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("각각의 Topping Option의 이미지가 서버에 표시 여부", async () => {
  render(<Options optionType="toppings" />);

  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  const altText = toppingImages.map(el => el.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
