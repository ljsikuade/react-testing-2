import React from "react";
import App from "../src/components/App";
import { shallow } from "enzyme";
global.fetch = require("jest-fetch-mock");

describe("Testing fetch", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test("Checks for empty array", () => {
    fetch.mockResponseOnce(JSON.stringify({ Search: undefined }));
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    const result = instance.submitSearch("Batman").then(() => {
      expect(fetch).toBeCalledWith(
        "http://www.omdbapi.com/?s=batman&apikey=2cda7206"
      );
    });
    expect(result).toEqual({});
    // const movState = wrapper.state("movies");
    // expect(movState).toEqual([]);
  });
});
