import { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({
    email: '',
    password: ''
  });

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const patternEmail = /^[A-Za-z0-9]+@gmail\.com$/;
    if (!patternEmail.test(emailValue)) {
      setMessage((prevMessage) => ({
        ...prevMessage,
        email: 'Email doit être dans ce format: xxxx1@gmail.com'
      }));
    } else {
      setMessage((prevMessage) => ({
        ...prevMessage,
        email: ''
      }));
    }
  };

  const handlePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (passwordValue.length < 8) {
      setMessage((prevMessage) => ({
        ...prevMessage,
        password: 'Le mot de passe doit comporter au moins 8 caractères.'
      }));
    } else {
      setMessage((prevMessage) => ({
        ...prevMessage,
        password: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.email && !message.password) {
      // Perform form submission logic here (e.g., API call)
      alert('Form submitted successfully!');
    } else {
      alert('Please fix the errors before submitting.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Saisissez votre email..."
          onChange={handleEmail}
        />
        <p>{message.email ? message.email : null}</p>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <p>{message.password ? message.password : null}</p>

        <button type="submit" disabled={message.email || message.password}>
          Submit
        </button>
      </form>
    </>
  );
}
