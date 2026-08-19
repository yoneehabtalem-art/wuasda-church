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
          <a href="#news">Beeksisa</a>
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
          <p>📢 BEEKSISA</p>

          <h2>Beeksisa Haaraa</h2>

          <p>
            Beeksisni fi odeeffannoon WUASDA CHURCH
            yeroo yeroon asitti ni maxxanfama.
          </p>
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