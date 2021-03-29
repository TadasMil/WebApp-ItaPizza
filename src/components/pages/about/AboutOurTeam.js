import React, { Component } from "react";
import SectionName from "../../SectionName";
import AboutTeamList from "./AboutTeamList";

export default class AboutOurTeam extends Component {
  render() {
    return (
      <>
        <SectionName title="Komanda" />
        <AboutTeamList />
      </>
    );
  }
}
