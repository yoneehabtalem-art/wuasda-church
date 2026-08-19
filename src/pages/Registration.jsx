import { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    className: "",
    paymentMethod: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("Galmee ergaa jira...");

    try {
      const response = await fetch("https://wuasda-church.onrender.com/registrations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      setMessage("✅ Galmeen kee milkaa'eera!");

      setFormData({
        name: "",
        phone: "",
        className: "",
        paymentMethod: "",
      });
    } catch (error) {
      setMessage(
        "❌ Server waliin wal qunnamuun hin danda'amne."
      );
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-box">
        <p className="registration-label">
          WUASDA CHURCH
        </p>

        <h1>Galmee Barumsa Sanbataa</h1>

        <p className="registration-description">
          Odeeffannoo kee guutiitii Barumsa Sanbataa irratti
          galmaa'i.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Maqaa Guutuu</label>

          <input
            type="text"
            name="name"
            placeholder="Maqaa kee galchi"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Lakkoofsa Bilbilaa</label>

          <input
            type="tel"
            name="phone"
            placeholder="09xxxxxxxx"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Kutaa Barumsa</label>

          <select
            name="className"
            value={formData.className}
            onChange={handleChange}
            required
          >
            <option value="">Kutaa filadhu</option>
            <option value="Ijoollee">Ijoollee</option>
            <option value="Dargaggoota">Dargaggoota</option>
            <option value="Ga'eessota">Ga'eessota</option>
            <option value="Senior">Senior</option>
          </select>

          <label>Akkaataa Kaffaltii</label>

          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Filadhu</option>
            <option value="CBE">CBE</option>
            <option value="Telebirr">Telebirr</option>
            <option value="Baankii Biraa">
              Baankii Biraa
            </option>
          </select>

          <button type="submit" className="submit-btn">
            Galmee Ergi
          </button>
        </form>

        {message && (
          <p className="registration-message">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Registration;