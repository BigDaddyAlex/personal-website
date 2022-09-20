import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Alex Sun</h2>
        <p><a href="mailto:SQCALEXANDER@GMAIL.COM">SQCALEXANDER@GMAIL.COM</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Alex. I like building things.
        I have worked on software engineering roles at serveral tech firms
        in the past few years.
      </p>
      <p>Prior to that, I spent a few years working in real estate finance in NYC.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/about" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alex Sun.</p>
    </section>
  </section>
);

export default SideBar;
