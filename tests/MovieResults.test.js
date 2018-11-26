import React from "react";
import MovieResults from "../src/components/MovieResults";
import renderer from "react-test-renderer";

const movieArr = [
  {
    imdbID: "bb",
    Year: 2015,
    Title: "Yo",
    Poster: "xx"
  },
  {
    imdbID: "adfs",
    Year: 2017,
    Title: "We love testing",
    Poster: "fkjn"
  },
  {
    imdbID: "aa",
    Year: 2019,
    Title: "CDXF",
    Poster: "faslfdk"
  }
];

describe("Results", () => {
  test("Array is correct", () => {
    const movieComp = renderer
      .create(<MovieResults movies={movieArr} />)
      .toJSON();
    expect(movieComp).toMatchSnapshot();
  });
});
