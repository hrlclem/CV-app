// Right side of the App, allowing the edition of CV

import React, {Component} from "react";
// import uniqid from "uniqid";

class Editing extends Component{

  constructor() {
    super();

    this.state = {
      intro: {
        name: '',
        // address: '',
        // mail: '',
        // number: '',
        // linkedin: '',
        // otherLink: '',
      },
      // profile: {
      //   description: ''
      // },
      // education: {
      //   titleEdu: '',
      //   degreeEdu: '',
      //   subjectEdu: '',
      //   descriptionEdu: '',
      //   yearEdu: ''
      // },
      // workExp: {
      //   titleWork: '',
      //   descriptionWork: '',
      //   locationWork: '',
      //   startWork: '',
      //   endWork: ''
      // },
      // skills: {
      //   categorySkill: '',
      //   skillArray: []
      // }
    }
  }


  handleChange = (e) => {
    console.log(this.state)

    this.setState({
      intro: {
        name: e.target.value,
      },
    });
  }


  render(){
    const { intro } = this.state;

    return (
      <div className="Editing">
        <div class="intro">
          <input 
            class="nameInput" 
            value={intro.name}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}


export default Editing;
