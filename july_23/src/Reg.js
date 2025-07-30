import { useState } from 'react';

function SignUpForm() {
  const [input, setInput] = useState({
    name: '',
    surname: '',
    emailId: '',
    contact: '',
    sex: '',
    education: '',
    location: '',
    zip: ''
  });

  const updateInput = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", input);
  };

  return (
    <section className="signup-form">
      <h2>User Sign-Up</h2>
      <form onSubmit={submitForm} style={{ maxWidth: 500, margin: '0 auto' }}>
        <div>
          <label>First Name:</label>
          <input
            name="name"
            value={input.name}
            onChange={updateInput}
            type="text"
            required
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            name="surname"
            value={input.surname}
            onChange={updateInput}
            type="text"
            required
          />
        </div>

        <div>
          <label>Email Address:</label>
          <input
            name="emailId"
            value={input.emailId}
            onChange={updateInput}
            type="email"
            required
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            name="contact"
            value={input.contact}
            onChange={updateInput}
            type="tel"
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="sex"
              value="Male"
              checked={input.sex === 'Male'}
              onChange={updateInput}
            />
            Male
          </label>
          <label style={{ marginLeft: 20 }}>
            <input
              type="radio"
              name="sex"
              value="Female"
              checked={input.sex === 'Female'}
              onChange={updateInput}
            />
            Female
          </label>
        </div>

        <div>
          <label>Degree/Qualification:</label>
          <input
            name="education"
            value={input.education}
            onChange={updateInput}
            type="text"
            required
          />
        </div>

        <div>
          <label>Address:</label>
          <input
            name="location"
            value={input.location}
            onChange={updateInput}
            type="text"
            required
          />
        </div>

        <div>
          <label>Postal Code:</label>
          <input
            name="zip"
            value={input.zip}
            onChange={updateInput}
            type="text"
            required
          />
        </div>

        <button type="submit" style={{ marginTop: 20 }}>Register</button>
      </form>
    </section>
  );
}

console.log("SignUpForm component is mounted.");
export default SignUpForm;
