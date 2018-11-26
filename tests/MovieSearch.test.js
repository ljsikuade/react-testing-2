// tests/components.Welcome.test.js
import React from "react";

import MovieSearch from "../src/components/MovieSearch";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

// describe("Welcome", () => {
//   test("matches the snapshot", () => {
//     const tree = renderer.create(<Welcome />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it("matches snap", () => {
//     const snap = renderer
//       .create(<MovieSearch movieString={"Hello"} />)
//       .toJSON();
//     expect(snap).toMatchSnapshot();
//   });
// });

describe("function validation", () => {
  const event = {
    preventDefault: jest.fn()
  };

  test("captures submit", () => {
    const movieString = "Batman";
    const submitSearch = jest.fn();
    const wrapper = shallow(
      <MovieSearch submitSearch={submitSearch} movieString={movieString} />
    );
    wrapper.find("form").simulate("submit", event);
    //first argument of first call = 0;
    //[call][argument]
    expect(submitSearch.mock.calls[0][0]).toEqual("Batman");
    expect(submitSearch.mock.calls.length).toBe(1);
  });
});
