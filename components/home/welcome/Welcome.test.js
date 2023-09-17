import React from "react";
import renderer from "react-test-renderer";
import Welcome from "./Welcome";

test("initial searchTerm is an empty string", () => {
	const { getByText } = renderer.create(<Welcome />).toJSON();
	const searchTermElement = getByText(""); // Add an appropriate selector
	expect(searchTermElement).toBeDefined();
});
