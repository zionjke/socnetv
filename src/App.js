import React from 'react';
import './App.css';

const App = () => {
  return (
      <div className="app-wrapper">
       <header className="header">
         <img src="https://lh3.googleusercontent.com/proxy/X4bdLaUu-alBjovbbW-6fxLini6GFDgD4V2U4QMHGY3rbeQmEVLqIX8nb1y2BMIzvH30_697AAg7HOUp_GYGSIdoQ1_vAVcHuZZe5mu2SWmGPZfGbqSIHuiMnzSSth6Q0TwhNrqlEcCpc0Ll6IvtfoJSVi0JrbGhsghP-Y9zIX0OvlNmIuCCZrFg1jddYrowJvPZ9mDi9-xeGAvO7v6WIWMCicG7io8ZVA3gnX84A5988vZjn9PA0DJb5Zsbp22MBBEtlRAOerAApLYyDvkBIKRGtgAnhEjTr_yeodrvvf_CBqkErutLNGZKk-3i5S-AGmvuIjca" alt=""/>
       </header>
        <nav className="nav">
          <div>
            <a href="#">Profile</a>
          </div>
          <div>
            <a href="#">Messages</a>
          </div>
          <div>
            <a href="#">News</a>
          </div>
          <div>
            <a href="#">Music</a>
          </div>
          <div>
            <a href="#">Settings</a>
          </div>

        </nav>
        <div className="content">
          <div>
            <img src="https://sites.google.com/site/prirodaukraieni9612/_/rsrc/1368976917563/foto-prirodi-ukraieni/110.jpg" alt=""/>
          </div>
          <div>
            ava+description
          </div>
          <div>
            My posts
            <div>
              New post
            </div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
            <div>
              post 3
            </div>
          </div>

        </div>
      </div>
  );
};

export default App;
