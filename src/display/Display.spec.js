// Test away!

import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

test("The Display renders without crashing", () => {
  render(<Display />);
});

test("Should match snapshot", () => {
  expect(render(<Display />)).toMatchSnapshot();
});

test("We are unlocked and opened", () => {
  const { getByText } = render(<Display />);

  const open = getByText(/open/i);
  const unlocked = getByText(/unlocked/i);

  expect(open.className).toMatch(/green-led/i);
  expect(unlocked.className).toMatch(/green-led/i);
});

test("We are locked and closed", () => {
  const { getByText } = render(<Display closed={true} locked={true} />);

  const closed = getByText(/closed/i);
  const locked = getByText(/locked/i);
  expect(closed.className).toMatch(/red-led/i);
  expect(locked.className).toMatch(/red-led/i);
});
