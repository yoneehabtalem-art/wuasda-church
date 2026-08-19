require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Server test
app.get("/", (req, res) => {
  res.json({
    message: "WUASDA CHURCH Server is running",
  });
});

// Register student
app.post("/registrations", async (req, res) => {
  try {
    const { name, phone, className, paymentMethod } = req.body;

    if (!name || !phone || !className || !paymentMethod) {
      return res.status(400).json({
        message: "Odeeffannoo hunda guuti.",
      });
    }

    const { data, error } = await supabase
      .from("registrations")
      .insert([
        {
          name: name,
          phone: phone,
          class_name: className,
          payment_method: paymentMethod,
          status: "Unpaid",
        },
      ])
      .select();

    if (error) {
      console.error("SUPABASE ERROR:", error);

      return res.status(500).json({
        message: error.message,
      });
    }

    console.log("REGISTRATION SAVED:", data);

    res.status(201).json({
      message: "Galmeen milkaa'eera.",
      registration: data[0],
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    res.status(500).json({
      message: "Server error.",
    });
  }
});

// Get registrations
app.get("/registrations", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("SUPABASE ERROR:", error);

      return res.status(500).json({
        message: error.message,
      });
    }

    res.json(data);
  } catch (error) {
    console.error("SERVER ERROR:", error);

    res.status(500).json({
      message: "Server error.",
    });
  }
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`WUASDA CHURCH server running on port ${PORT}`);
});