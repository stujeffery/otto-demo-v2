import { useState } from "react";
import { OttoChat } from "./OttoChat";

export default function App() {
  const [formData, setFormData] = useState({ firstName: "", province: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="App">
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <input name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input name="province" placeholder="Province" onChange={handleChange} required />
          <textarea name="message" placeholder="How can we help you?" onChange={handleChange} />
          <button type="submit">Start Chat</button>
        </form>
      ) : (
        <OttoChat formData={formData} />
      )}
    </div>
  );
}
