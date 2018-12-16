/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
   <div>   
    <nav className="w3-sidebar w3-blue w3-collapse w3-top w3-large w3-padding" id="mySidebar">
      <a href="javascript:void(0)" onClick={close('none')} className="w3-button w3-hide-large w3-display-topleft" id="onHover">Close Menu</a>
      <div className="w3-container">
        <h3 className="w3-padding-64"><b>Aquaforce</b></h3>
      </div>
      <div className="w3-bar-block">
        <a href="#" onClick={close('none')} className="w3-bar-item w3-button w3-hover-white">Home</a> 
        <a href="#About_Us" onClick={close('none')} className="w3-bar-item w3-button w3-hover-white">About Us</a> 
        <a href="#services" onClick={close('none')} className="w3-bar-item w3-button w3-hover-white">Services</a> 
        <a href="#contact" onClick={close('none')} className="w3-bar-item w3-button w3-hover-white">Contact Us</a>
      </div>
    </nav>

    {/* Top menu on small screens */}
    <header className="w3-container w3-top w3-hide-large w3-blue w3-xlarge w3-padding">
      <a href="javascript:void(0)" className="w3-button w3-blue w3-margin-right" onClick={open('none')}>☰</a>
      <span>Aquaforce</span>
    </header>

    {/* Overlay effect when opening sidebar on small screens */}
    <div className="w3-overlay w3-hide-large" onClick={close('none')} title="close side menu" id="myOverlay"></div>

    {/* PAGE CONTENT */}
    <div className="w3-main" id="content">

      {/* Header */}
      <div className="w3-container" id="About_Us">
        <img src="Aqua\aqua\src\Logo.jpg" id="img" alt="Logo"/>
        <h1 className="w3-jumbo"><b>Cleaning Experts</b></h1>
        <h1 className="w3-xxxlarge w3-text-blue"><b>About Us.</b></h1>
        <hr id="underline" className="w3-round"></hr>
        <p>
          We are specialists in carpet cleaning, floor buffering/polishing and industrial high pressure jet washing.
          Using industrial equipment we can transform areas in and around the home or workplace. 
          We offer a friendly and professional service and are fully insured.
          At AquaForce we understand the importance of first impressions and work enthusiastically to help you achieve a spotlessly clean environment.
        </p>
        <p>
        With nearly 10 years of experience in the cleaning industry, AquaForce was born from a love of perfection and the desire to turn the downtrodden into the beautiful. 
        Based in Edinburgh we also cater to the rest of The Lothians, Fife and The Borders. 
        We are passionate about our work and customer satisfaction is our number one goal and our competitive pricing is a reflection of this.
        </p>
      </div>
      
      {/* Photo grid */}
      <div className="w3-row-padding">
        <div className="w3-half">
          <img src="" id="img"  alt="To source"/>
          <img src="" id="img"  alt="To source"/>
          <img src="" id="img"  alt="To source"/>
        </div>

        <div className="w3-half">
          <img src="" id="img"  alt="To source"/>
          <img src="" id="img"  alt="To source"/>
          <img src="" id="img" alt="To source"/>
        </div>
      </div>

      {/* Services */}
      <div className="w3-container" id="services">
        <h1 className="w3-xxxlarge w3-text-blue"><b>Services.</b></h1>
        <hr id="underline" className="w3-round"/>
      </div>

      <div className="w3-row-padding">
        <div className="w3-half">
          <img src="" id="img" alt="Driveway & Patio Cleaning"/>
          <b>
            Driveway & Patio Cleaning 
          </b>
          <p>
            We can take your old, mossy driveways and garden slabs back to looking new! 
            Also quickly and effectively removed weeds. 
            We can also resand the area for you.
          </p>
          <img src="" id="img" alt="After Party Cleaning"/>
          <b>
            After Party Cleaning
          </b>
          <p>
            The sign of a good night is often a headache the next day...
            Take the stress out of cleaning up with our one stop after party cleaning service.
          </p>
          <img src="" id="img" alt="Move In/Out Cleaning"/>
          <b>
            Move In/Out Cleaning
          </b>
          <p>
            Moving house is stressful enough without having to clean - 
            we have a range of moving packages to make your life easier!
          </p>
        </div>

        <div className="w3-half">
          <img src="" id="img" alt="Carpet Cleaning"/>
          <b>
            Carpet Cleaning
          </b>
          <p>
            We can take your old, mossy driveways and garden slabs back to looking new! 
            Also quickly and effectively removed weeds. 
            We can also resand the area for you.
          </p>
          <img src="" id="img" alt="Deep Spring Cleaning"/>
          <b>
            Deep Spring Cleaning 
          </b>
          <p>
            Spring time again? Fancy a deep clean for the new year? 
            Expecting a baby and want the house cleaner than average? 
            Put your feet up and leave the hard work to us! Just call us for a free no obligation quote.
          </p>
          <img src="" id="img" alt="Upholstery Cleaning"/>
          <b>
            Upholstery Cleaning 
          </b>
          <p>
            Bought a gorgeous new sofa and had a red wine disaster? 
            Worry not, our carpet cleaners are the best on the market and can tackle even the toughest stains.
          </p>
        </div>
      </div>

      <div className="w3-row-padding">
        <h2><b>Additional Services</b></h2>
        <div className="w3-half">
          <b>
              Caravans & boats
          </b>
          <p>
            Caravan cleaning and boat descaling at competitive prices.
          </p>
        </div>
        <div className="w3-half">
          <b>
            Graffiti Removal
          </b>
          <p>
            Using specialised chemicals we can efficiently remove graffiti using high pressured jet cleaning.
          </p>
        </div>
      </div>  

      {/* Contact */}
      <div className="w3-container" id="contact">
        <h1 className="w3-xxxlarge w3-text-blue"><b>Contact Us.</b></h1>
        <hr id="underline" className="w3-round"/>
        <p>Get a free estimate, enter your details below or contact us directly at:</p>
        <p>
          Email: aquaforcejetwash@gmail.com
          Tel: 07923-221-120
        </p>
        <form action="/action_page.php" target="_blank">
          <div className="w3-section">
            <label>Name</label>
            <input className="w3-input w3-border" type="text" name="Name" required/>
          </div>
          <div className="w3-section">
            <label>Email</label>
            <input className="w3-input w3-border" type="text" name="Email" required/>
          </div>
          <div className="w3-section">
            <label>Subject</label>
            <input className="w3-input w3-border" type="text" name="Subject" required/>
          </div>
          <div className="w3-section">
            <label>Message</label>
            <input className="w3-input w3-border" type="text" name="Message" required/>
          </div>
          <button type="submit" className="w3-button w3-block w3-padding-large w3-blue w3-margin-bottom">Send Message</button>
        </form>  
      </div>

    {/* End page content */}
    </div>
  </div> 
  );
  }   
}

//Script to open and close sidebar
// THESE ARE CURRENTLY NOT WORKING UNABLE TO CLOSE NAV BAR ON SMALL SCREENS
function open() {
//  document.getElementById("mySidebar").display = "block";
//  document.getElementById("myOverlay").display = "block";
}

function close(input) {
 // var sidebar = document.getElementById("mySidebar");
 // var overlay = document.getElementById("myOverlay");
 // sidebar.style.display = input;
 // overlay.style.display = input;
}
export default App;
