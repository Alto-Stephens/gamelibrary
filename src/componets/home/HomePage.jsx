import { useState } from "react";
import "./HomePage.css";

const imageRoot = "https://alto-stephens.github.io/csce242/projects/part7/images";

const slides = [
  { name: "Pac-Man", year: "1980", image: "pacman.jpg" },
  { name: "Space Invaders", year: "1978", image: "invaders.jpg" },
  { name: "Donkey Kong", year: "1981", image: "dk.jpg" },
  { name: "Galaga", year: "1981", image: "galaga.jpg" },
  { name: "Out Run", year: "1986", image: "outrun.jpg" },
];

const featuredGames = [
  {
    name: "PAC-MAN",
    year: "1980",
    image: "pacman.jpg",
    description:
      "The most iconic arcade game ever created. Guide Pac-Man through a maze of dots while dodging hordes of ghosts.",
  },
  {
    name: "SPACE INVADERS",
    year: "1978",
    image: "invaders.jpg",
    description:
      "The game that launched the golden age of arcade gaming. Defend Earth from relentless alien formations.",
  },
  {
    name: "DONKEY KONG",
    year: "1981",
    image: "dk.jpg",
    description:
      "Mario's debut. Climb ladders, dodge barrels, and rescue Pauline from the towering ape.",
  },
];

function FeaturedSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];
  const changeSlide = (direction) => {
    setActiveIndex((index) => (index + direction + slides.length) % slides.length);
  };

  return (
    <section className="home-gallery" aria-label="Featured arcade games">
      <div className="home-section-heading">
        <h2>GAMES TO DISCOVER</h2>
        <span aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
      <div className="home-slideshow">
        <a
          className="home-slide"
          href="https://alto-stephens.github.io/csce242/projects/part7/games.html"
          aria-label={`${slide.name}, released ${slide.year}`}
        >
          <img src={`${imageRoot}/${slide.image}`} alt={`${slide.name} arcade game`} />
          <span className="home-slide-caption">
            <strong>{slide.name}</strong>
            <span>{slide.year}</span>
          </span>
        </a>
      </div>
      <div className="home-slide-controls">
        <button type="button" onClick={() => changeSlide(-1)}>
          PREVIOUS
        </button>
        <button type="button" onClick={() => changeSlide(1)}>
          NEXT
        </button>
      </div>
    </section>
  );
}

function FeaturedGameCard({ game }) {
  return (
    <article
      className="home-game-card"
      style={{ "--game-image": `url("${imageRoot}/${game.image}")` }}
    >
      <div className="home-game-card-heading">
        <h3>{game.name}</h3>
        <span>RELEASED: {game.year}</span>
      </div>
      <p>{game.description}</p>
      <a href="https://alto-stephens.github.io/csce242/projects/part7/games.html">
        EXPLORE GAMES
      </a>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="home-shell">
      <section className="home-hero" aria-label="Midnight Arcade">
        <div className="home-hero-content">
          <p>INSERT COIN TO CONTINUE</p>
          <h1>
            <span>MIDNIGHT</span>
            <span>ARCADE</span>
          </h1>
        </div>
      </section>

      <p className="home-intro">
        Journey back to the golden age of gaming.
        <br />
        Explore the classics, the history, and the culture
        <br />
        that shaped an entire generation.
      </p>

      <nav className="home-tags" aria-label="Explore classic games">
        {["PAC-MAN", "SPACE INVADERS", "DONKEY KONG", "GALAXIAN", "TETRIS"].map(
          (game) => (
            <a
              href="https://alto-stephens.github.io/csce242/projects/part7/games.html"
              key={game}
            >
              {game}
            </a>
          ),
        )}
      </nav>

      <FeaturedSlideshow />

      <section className="home-featured">
        <div className="home-section-heading">
          <h2>FEATURED CLASSICS</h2>
        </div>
        <div className="home-card-grid">
          {featuredGames.map((game) => (
            <FeaturedGameCard game={game} key={game.name} />
          ))}
        </div>
      </section>

      <a
        className="home-banner"
        href="https://alto-stephens.github.io/csce242/projects/part7/gallery.html"
        aria-label="Explore the arcade gallery"
      >
        <img
          src={`${imageRoot}/arcade%20carpet.jpg`}
          alt="Colorful carpet inside a classic arcade"
          loading="lazy"
        />
        <span>STEP INSIDE THE ARCADE</span>
      </a>

      <section className="home-contact" id="contact">
        <p className="home-eyebrow">KEEP THE CLASSICS ALIVE</p>
        <h2>CONTACT US</h2>
        <p>
          Have a favorite classic, a question, or an idea? Get in touch and
          explore the games that started it all.
        </p>
        <a href="https://alto-stephens.github.io/csce242/projects/part7/index.html#contact">
          GET IN TOUCH
        </a>
      </section>

      <footer className="home-footer">
        <span>MIDNIGHT ARCADE</span>
        <span>ALTO STEPHENS 2026</span>
        <span>A TRIBUTE TO THE GOLDEN AGE</span>
      </footer>
    </main>
  );
}
