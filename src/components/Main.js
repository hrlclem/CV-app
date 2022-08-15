// Right side of the App, allowing the edition of CV

import React, {Component} from "react";
import Preview from "./Preview"

class Editing extends Component{

  constructor() {
    super();

    this.state = {
      intro: {
        name: 'Bob',
        address: 'Hey',
        mail: '',
        number: '',
        linkedin: '',
        otherLink: '',
        description: ''
      },
      education: {
        eduId: '',
        titleEdu: '',
        institutEdu: '',
        descriptionEdu: '',
        yearStartEdu: '',
        yearEndEdu: ''
      },
      // workExp: {
      //   wordId: '',
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


//INTRO INFO
  nameChange = (e) => { this.setState(prevState =>({intro: {...prevState.intro, name: e.target.value}}))};
  addressChange = (e) => { this.setState(prevState =>({intro: {...prevState.intro, address: e.target.value}}))};
  mailChange = (e) => { this.setState(prevState =>({intro: {...prevState.intro, mail: e.target.value}}))};
  numberChange = (e) => { this.setState(prevState =>({intro: {...prevState.intro, number: e.target.value}}))};
  lkdChange = (e) => { this.setState(prevState =>({intro: {...prevState.intro, linkedin: e.target.value}}))};
  otherChange = (e) => { this.setState(prevState =>({intro: {...prevState.intro, otherLink: e.target.value}}))};
  descriptionChange = (e) => { this.setState(prevState =>({intro: {...prevState.intro, description: e.target.value}}))};

//EDUCATION INFO
  titleEduChange = (e) => { this.setState(prevState =>({education: {...prevState.education, titleEdu: e.target.value}}))};
  institutEduChange = (e) => { this.setState(prevState =>({education: {...prevState.education, institutEdu: e.target.value}}))};
  descriptionEduChange = (e) => { this.setState(prevState =>({education: {...prevState.education, descriptionEdu: e.target.value}}))};
  yearStartEduChange = (e) => { this.setState(prevState =>({education: {...prevState.education, yearStartEdu: e.target.value}}))};
  yearEndEduChange = (e) => { this.setState(prevState =>({education: {...prevState.education, yearEndEdu: e.target.value}}))};
  


  render(){
    const { intro } = this.state;


          return (
      <div className="main">
        
        <Preview 
                  name= {intro.name}
                  address= {intro.address}
                  mail= {intro.mail}
                  number= {intro.number}
                  linkedin= {intro.linkedin}
                  otherLink= {intro.otherLink}
                  description= {intro.description}

                  titleEdu= {intro.titleEdu}

        />

        <div className="editingDiv">
{/* INTRO DIV */}
          <div className="introEdit">
          <div className="prevTitle persoDetailTitle">Personal Details</div>
            <div className="nameDiv">
              <label htmlFor="nameInput">Name</label>
              <input 
                className="nameInput" 
                name="name"
                value={intro.name || ''}
                onChange={this.nameChange.bind(this)}
                id="nameInput"
              />
            </div>

            <div className="addressDiv">
              <label htmlFor="addressInput">Address</label>
              <input 
                className="addressInput" 
                name="address"
                value={intro.address || ''}
                onChange={this.addressChange.bind(this)}
                id="addressInput"
              />    
            </div>

            <div className="mailDiv">
              <label htmlFor="mailInput">Mail</label>
              <input 
                className="mailInput" 
                name="mail"
                value={intro.mail || ''}
                onChange={this.mailChange.bind(this)}
                id="mailInput"
              />    
            </div>

            <div className="numberDiv">
              <label htmlFor="numberInput">Phone number</label>
              <input 
                className="numberInput" 
                name="number"
                value={intro.number || ''}
                onChange={this.numberChange.bind(this)}
                id="numberInput"
              />    
            </div>

            <div className="linkedinDiv">
              <label htmlFor="linkedinInput">Linkedin</label>
              <input 
                className="linkedinInput" 
                name="linkedin"
                value={intro.linkedin || ''}
                onChange={this.lkdChange.bind(this)}
                id="linkedinInput"
              />    
            </div>

            <div className="otherDiv">
              <label htmlFor="otherLinkInput">Other</label>
              <input 
                className="otherLinkInput" 
                name="otherLink"
                value={intro.otherLink || ''}
                onChange={this.otherChange.bind(this)}
                id="otherLinkInput"
              />    
            </div>

            <div className="descriptionDiv">
              <label htmlFor="descriptionInput">Description</label>
              <input 
                className="descriptionInput" 
                name="description"
                value={intro.description || ''}
                onChange={this.descriptionChange.bind(this)}
                id="descriptionInput"
              />    
            </div>
          </div>


{/* EDU DIV */}
          <div className="prevTitle educationPrevTitle">Education</div>

            <div className="eduTitleDiv">
              <label htmlFor="titleEduInput">Program</label>
              <input 
                className="titleEduInput" 
                name="title"
                value={intro.titleEdu || ''}
                onChange={this.titleEduChange.bind(this)}
                id="titleEduInput"
              />
            </div>
        </div>
      </div>

    );
  }
}

export default Editing ;
