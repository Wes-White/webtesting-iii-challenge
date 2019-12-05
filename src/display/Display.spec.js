// Test away!

import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

test("The Display renders without crashing", () => {
  render(<Display />);
});
