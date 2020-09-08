import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        ></link>
        <div class='navbar'>
          <a href='/' class='brand-logo'>
            KrutiWeb
          </a>
          <div class='dropdown'>
            <button class='dropbtn'>
              <i class='fas fa-bars'></i>
            </button>
            <div class='dropdown-content'>
              <a href='resume'>Resume</a>
              <a href='projects'>Projects</a>
              <a href='skills'>Skills</a>
            </div>
          </div>
        </div>
      </nav>

      <header className='App-header'>
        <h1>Kruti Shah</h1>
        <a
          href='http://www.linkedin.com/in/kruti-shah139'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i
            class='fa fa-linkedin-square'
            style={{ fontsize: '48px', color: 'white' }}
          ></i>
        </a>
        <a
          href='http://www.instagram.com/krutishah139'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i
            class='fa fa-instagram'
            style={{ fontsize: '48px', color: 'white' }}
          ></i>
        </a>
        <a
          href='http://www.github.com/krutishah139'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i
            class='fa fa-github-square'
            style={{ fontsize: '48px', color: 'white' }}
          ></i>
        </a>
      </header>
    </div>
  );
}

export default App;
