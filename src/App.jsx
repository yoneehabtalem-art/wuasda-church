import { useState } from "react";
import "./App.css";
import Registration from "./pages/Registration";

function App() {
  const [page, setPage] = useState("home");

  if (page === "registration") {
    return (
      <div>
        <header className="navbar">
          <div className="logo">⛪ WUASDA CHURCH</div>

          <button
            className="register-btn"
            onClick={() => setPage("home")}
          >
            ← Gara Home
          </button>
        </header>

        <Registration />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">⛪ WUASDA CHURCH</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#sabbath">Barumsa Sanbataa</a>
          <a href="#events">Sagantaa</a>
          <button
  className="nav-link"
  onClick={() => {
    document
      .getElementById("news")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Beeksisa
</button>
          <a href="#contact">Nu Qunnami</a>
        </nav>

        <button
          className="register-btn"
          onClick={() => setPage("registration")}
        >
          Galmaa'i
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="welcome">BAGA NAGAA DHUFTAN</p>

            <h1>
              Waliin Baranna,
              <br />
              Waliin Guddanna
            </h1>

            <p className="description">
              WUASDA CHURCH irratti Barumsa Sanbataa
              galmaa'i, sagantaa keenya hordofi,
              akkasumas beeksisa haaraa argadhu.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => setPage("registration")}
              >
                Barumsa Sanbataa
              </button>

              <button
                className="secondary-btn"
                onClick={() => {
                  document
                    .getElementById("events")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Sagantaa Ilaali
              </button>
            </div>
          </div>
        </section>

        <section className="cards" id="sabbath">
          <div className="card">
            <div className="icon">📖</div>
            <h2>Barumsa Sanbataa</h2>
            <p>
              Barumsa Sanbataa keenyaaf online galmaa'i.
            </p>
          </div>

          <div className="card">
            <div className="icon">💳</div>
            <h2>Kaffaltii</h2>
            <p>
              Account WUASDA CHURCH fayyadamuun kaffaltii raawwadhu.
            </p>
          </div>

          <div className="card" id="events">
            <div className="icon">📅</div>
            <h2>Sagantaa</h2>
            <p>
              Sagantaa fi hojii Church yeroo yeroon ilaali.
            </p>
          </div>

          <div className="card">
            <div className="icon">📢</div>
            <h2>Beeksisa</h2>
            <p>
              Beeksisa haaraa WUASDA CHURCH irraa argadhu.
            </p>
          </div>
        </section>

        <section className="announcement" id="news">
  <div className="announcement-header">
    <span>📢</span>
    <h2>BEEKSISA</h2>
  </div>

  <h3>
    Eebba Album Faarfannaa – Barumsa Sanbataa 9ffaa
  </h3>

  <p>
    Akkam jirtu hundumti keessan?
  </p>

  <p>
    Akkuma beekamu, Barumsa Sanbataa 9ffaa irratti{" "}
    <strong>
      Eebbi Album Faarfannaa Garee Maatii Waldaa
      Adventistii Guyyaa TorbaffaaWUASDA ,waldaa Calalaqiitti
    </strong>{" "}
    ni raawwatama.
  </p>

  <p>
    Galiin eebba faarfannaa kana irraa argamu
    ijaarsa waldaatiif waan ooluuf, jiraattonni
    Magaalaa Naqamtee hundi sagantaa kana irratti
    akka argamtan kabajaan afeeramtaniittu.
  </p>

  <p>
    Fagoo kan jirtan immoo karaa toora TikTok
    armaan gadii nu hordofuu dandeessu.
  </p>

  <div className="announcement-footer">
    🙏 Hundi keessan kottaa nu waliin gammadaa!
  </div>
</section>
      </main>

      <footer id="contact">
        <h2>⛪ WUASDA CHURCH</h2>

        <p>
          Waliin waaqeffanna, waliin baranna,
          waliin guddanna.
        </p>

        <p>© 2026 WUASDA CHURCH</p>
      </footer>
    </div>
  );
}

export default App;