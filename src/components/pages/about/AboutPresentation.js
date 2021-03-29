import React, { Component } from "react";
import SectionName from "../../SectionName";
import AboutPresentationTexts from "./AboutPresentationTexts";
import AboutPresentationButtons from "./AboutPresentationButtons";
import { textData } from "./AboutPresentationTextData";

export default class AboutPresentation extends Component {
  state = {
    section: "about",
    textData: textData,
  };

  handleSectionState = (sectionName) => {
    const newSection = sectionName;
    this.setState({
      section: newSection,
    });
  };

  changeTitle = (section) => {
    if (section === "about") {
      return <SectionName title="Apie mus" />;
    } else if (section === "missions") {
      return <SectionName title="Užduotys" />;
    } else if (section === "goals") {
      return <SectionName title="Tikslai" />;
    } else {
      return <SectionName title="Vertybės" />;
    }
  };

  render() {
    return (
      <>
        {this.changeTitle(this.state.section)}
        <div className="about-presentation">
          <AboutPresentationButtons
            activeSection={this.state.section}
            handleSectionState={this.handleSectionState}
          />
          <AboutPresentationTexts
            currentSection={this.state.section}
            textData={this.state.textData}
          />
        </div>
      </>
    );
  }
}
