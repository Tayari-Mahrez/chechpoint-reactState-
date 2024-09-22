import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate web developer.',
        imgSrc: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/gzZpBDV3nX1AWytfLhbgs/d528553697d959544c8ca5b80b6d8beb/web_developer.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000',
        profession: 'Software Engineer',
      },
      shows: false,
      lastMountedTime: 0,
      intervalId: null,
    };
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  componentDidMount() {
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const currentTime = Math.floor((Date.now() - startTime) / 1000); 
      this.setState({ lastMountedTime: currentTime });
    }, 1000);

    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId); 
  }

  render() {
    const { person, shows, lastMountedTime } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} width={100} height={40} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}

        <div className="timer">
          <h4>Time since component mounted: {lastMountedTime} seconds</h4>
        </div>
      </div>
    );
  }
}

export default App;
