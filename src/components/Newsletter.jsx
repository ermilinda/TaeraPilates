import React from 'react';
import Countdown from './Countdown.jsx';

import heroImg from '../assets/hero.jpg';
import wordmarkIvory from '../assets/logo-wordmark-ivory.png';
import iconIvory from '../assets/logo-icon-ivory.png';
import classSculpt from '../assets/class-sculpt.jpg';
import classReformer from '../assets/class-reformer.jpg';
import classPrenatal from '../assets/class-prenatal.jpg';
import matPhoto from '../assets/mat-cutout.png';

const CLASSES = [
  { title: 'Sculpt & Tone', img: classSculpt, alt: 'Sculpt workout with resistance band and ankle weights', pos: '40% 40%' },
  { title: 'Reformer Pilates', img: classReformer, alt: 'Woman doing a lunge on a reformer', pos: '55% 50%', featured: true },
  { title: 'Pre & Postnatal', img: classPrenatal, alt: 'Pregnant woman sitting on an exercise ball', pos: '50% 50%' },
];

const FOUNDING_PERKS = [
  'Exclusive preview classes before anyone else',
  'TÆRA Welcome Set with towel & water bottle',
];

const pad = (n) => String(n).padStart(2, '0');

function formatDate(date) {
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? '' : `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
}

function formatTime(date) {
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? '' : `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5" width="17" height="15" rx="3" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

/**
 * TÆRA newsletter – one responsive component.
 * ≥ 761px: wide web layout (nav, side-by-side columns).
 * ≤ 760px: mobile / email-style layout (centered hero, stacked sections).
 * All switching happens in CSS (styles/newsletter.css).
 */
export default function Newsletter({
  openingDate = '2027-01-01T09:00:00',
  ctaUrl = '#',
  address = '[STREET & NO.]',
  email = 'hello@[YOUR-DOMAIN].ch',
  instagramUrl = 'https://instagram.com',
  websiteUrl = '#',
}) {
  const dateLabel = formatDate(openingDate);
  const timeLabel = formatTime(openingDate);

  return (
    <main className="nl">
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <img className="hero__img" src={heroImg} alt="Woman performing a stretch on a reformer" />
        <div className="hero__shade" aria-hidden="true" />

        <header className="hero__nav container">
          <img className="hero__logo" src={wordmarkIvory} alt="TÆRA Studio" />
          <nav className="hero__links" aria-label="Newsletter sections">
            <a href="#classes">Classes</a>
            <a href="#founding">Founding</a>
            <a href="#opening">Opening</a>
            <a className="btn btn--pill btn--sm" href={ctaUrl}>
              Save my spot
            </a>
          </nav>
        </header>

        <div className="hero__headline container">
          <h1>Coming soon</h1>
          <p>it's almost time, Chur.</p>
        </div>
      </section>

      {/* ---------- Grand Opening glass panel ---------- */}
      <div id="opening" className="opening container">
        <div className="opening__panel">
          <div className="opening__meta">
            <span>TÆRA Studio · Chur</span>
            <span className="opening__when">
              <span className="opening__icon"><CalendarIcon /></span>
              {dateLabel}
              <span className="opening__bar" aria-hidden="true" />
              <span className="opening__time">{timeLabel}</span>
              <ChevronIcon />
            </span>
          </div>
          <h2 className="opening__title">Grand Opening</h2>
          <Countdown target={openingDate} variant="pills" />
          <p className="opening__text">
            Reformer Pilates &amp; More + <strong>Founding</strong> Memberships. A calm, light-filled studio in Chur,
            Switzerland.
          </p>
          <a className="btn btn--pill btn--block" href={ctaUrl}>
            Stay Tuned
          </a>
        </div>
      </div>

      {/* ---------- Letter ---------- */}
      <section className="letter container">
        <h2>Dear TÆRA community,</h2>
        <div className="letter__body">
          <p>
            thank you for being with us from the very beginning. In Chur, we're creating a place where movement feels
            good: bright rooms, premium reformers and small-group classes where you are truly seen.
          </p>
          <p>
            In this first newsletter, you'll find out what's ahead – and how to secure your spot as a Founding Member
            before we officially open.
          </p>
        </div>
      </section>

      {/* ---------- Classes ---------- */}
      <section id="classes" className="classes container">
        <div className="divider">
          <span />
          <h2>Our Classes</h2>
          <span />
        </div>
        <div className="classes__row">
          {CLASSES.map((c) => (
            <figure key={c.title} className={`class${c.featured ? ' class--featured' : ''}`}>
              <img src={c.img} alt={c.alt} style={{ objectPosition: c.pos }} />
              <figcaption>{c.title}</figcaption>
            </figure>
          ))}
        </div>
        <p className="classes__text">
          Strengthen, lengthen and tone with classic Pilates equipment – in small groups, for every level and every
          stage of life.
        </p>
      </section>

      {/* ---------- Founding member ---------- */}
      <section id="founding" className="founding">
        <div className="founding__inner container">
          <div className="founding__copy">
            <span className="founding__eyebrow">Pre-opening only</span>
            <h2>
              Become a <em>Founding Member!</em>
            </h2>
            <ul className="founding__perks">
              {FOUNDING_PERKS.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <a className="btn btn--pill btn--lg" href={ctaUrl}>
              Save my spot
            </a>
          </div>
          <div className="founding__visual">
            <div className="founding__mat-wrap">
              <img className="founding__mat" src={matPhoto} alt="Woman stretching on a Pilates mat, seen from above" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Opening / location ---------- */}
      <section className="facts container">
        <div className="facts__item">
          <span className="facts__label">Opening</span>
          <span className="facts__value">{dateLabel}</span>
        </div>
        <div className="facts__item">
          <span className="facts__label">Location</span>
          <span className="facts__value">Chur, Switzerland</span>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="footer__top container">
          <div className="footer__brand">
            <div className="footer__badge" aria-hidden="true">
              <img src={iconIvory} alt="" />
            </div>
            <div className="footer__names">
              <span>TÆRA Studio</span>
              <span>Reformer Pilates &amp; More</span>
            </div>
          </div>
          <address className="footer__address">
            {address} · 7000 Chur, Switzerland
            <br />
            {email}
          </address>
          <nav className="footer__links" aria-label="Social links">
            <a href={instagramUrl}>Instagram</a>
            <a href={websiteUrl}>Website</a>
          </nav>
        </div>
        <div className="footer__legal container">
          <span>You're receiving this email because you joined our waitlist.</span>
          <span>
            <a href="#">Unsubscribe</a> · <a href="#">Preferences</a>
          </span>
        </div>
      </footer>
    </main>
  );
}
