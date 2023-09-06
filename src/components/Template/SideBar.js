import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Lin Pengtian</h2>
        <p><a href="mailto:linpengtian2@gmail.com">linpengtian2@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Lin Pengtian. I am a senior full-stack developer. Previously,
        I was a senior mobile developer of <a href='https://thisisglance.com/'>Glance</a> and <a href='https://alphacogs.com/'>Alphacogs</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Lin Pengtian <Link to="/">gmail.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
