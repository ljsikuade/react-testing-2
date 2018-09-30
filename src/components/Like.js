import React from 'react';

class Like extends React.Component {
  constructor(props){
    super(props);

    this.state = {likes: 0};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState(function(prevState){
      return {
        likes: prevState.likes + 1
      };
    })
  }

  render(){
    return (
      <div>
        <span>Movie has {this.state.likes} likes</span>
        <button onClick={this.handleClick}>Like</button>
      </div>
    );
  }
};

export default Like;
