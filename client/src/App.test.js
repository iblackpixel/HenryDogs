// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Footer from "./components/NavBar/Footer";

configure({ adapter: new Adapter() });

describe("<Footer/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("Deberia renderizar Tres <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(3);
  });
  it('El primer Link debe tener el texto "GitHub" y cambiar la ruta hacia "https://github.com/iblackpixel".', () => {
    expect(wrapper.find(Link).at(0).prop("to")).toEqual(
      "https://github.com/iblackpixel"
    );
    expect(wrapper.find(Link).at(0).text()).toEqual("GitHub");
  });
  it('El segundo Link debe tener el texto "LinkedIn" y cambiar la ruta hacia "https://www.linkedin.com/in/roque-iván-moyano-a5b0b7203"', () => {
    expect(wrapper.find(Link).at(1).prop("to")).toEqual(
      "https://www.linkedin.com/in/roque-iván-moyano-a5b0b7203"
    );
    expect(wrapper.find(Link).at(1).text()).toEqual("LinkedIn");
  });
  it('El tercer Link debe tener el texto "Mail" y cambiar la ruta hacia "mailto:rimoyano23@gmail.com,rimoyano23@gmail.com"', () => {
    expect(wrapper.find(Link).at(2).prop("to")).toEqual(
      "mailto:rimoyano23@gmail.com,rimoyano23@gmail.com"
    );

    expect(wrapper.find(Link).at(2).text()).toEqual("Mail");
  });
});
