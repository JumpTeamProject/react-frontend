import React, { Component } from 'react';
import TempCalc1 from "./TempCalc1"
import TempCalc2 from "./TempCalc2"

class PageContent extends Component {

    changePage(page) {
        switch (page) {
          case "home":
            return <TempCalc1 />;
          case "page2":
              return <TempCalc2 />;
          default:
            return <TempCalc1 />;
        }
      }

    render() {
        const myPage = this.changePage(this.props.page);
        return myPage;
    }
}

export default PageContent;