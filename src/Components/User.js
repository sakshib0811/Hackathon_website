import React, { Component } from "react";
import "./User.css";

class User extends Component {
  state = {
    pictures: [],
  };

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=5`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let pictures = data.results.map((person) => {
          return (
            <div className="about_speak">
              <img src={person.picture.large} className='speak_img' />
              <p>{person.email}</p>
            </div>
          );
        });
        this.setState({ pictures: pictures });
        console.log(this.state.pictures);
      });
  }

  render() {
    // ------  THE RETURN BLOCK  ------ //

    return (
      <div className="User1">
        <p className="speak_h1">Speakers & Judges</p>
        <div className="User">
            {this.state.pictures}
        </div>
        
      </div>
    );
  }
}

export default User;
