import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [_, setData] = useState({});

  const nameRegex = /^[A-Za-z\s]{3,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageRegex = /^.{10,500}$/;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!nameRegex.test(name)) {
      setError("errorname");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("emailerror");
      return;
    }
    if (!messageRegex.test(message)) {
      setError("messagerror");
      return;
    }

    setData({ name, email, message });
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };
  return (
    <form
      className="w-100 d-flex flex-column gap-3 py-5"
      onSubmit={handleOnSubmit}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Name"
      />
      {error == "errorname" && (
        <p className="text-danger">Name must be 3–30 letters</p>
      )}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter a valid email address"
      />
      {error == "emailerror" && (
        <p className="text-danger">Invalid email format</p>
      )}

      <textarea
        cols="30"
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      ></textarea>
      {error == "messagerror" && (
        <p className="text-danger">Message must be 10-500 characters</p>
      )}

      <button type="submit">Send Message</button>
    </form>
  );
}
