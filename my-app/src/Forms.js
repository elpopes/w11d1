import React, { useEffect, useState } from "react";

const Form = () => {
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   phoneType: "",
  //   staff: "",
  //   bio: "",
  //   signUp: "",
  // });

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [phoneType, setPhoneType] = useState("");

  const [staff, setStaff] = useState("");

  const [bio, setBio] = useState("");

  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    let errors = [];
    if (name.length === 0) {
      errors.push("Name can't be empty");
    }
    if (email.length === 0 && !email.includes("@")) {
      errors.push("Must have valid email");
    }
    if (phoneNumber.length !== 10 && /^[0-9]+$/.test(phoneNumber)) {
      errors.push("Must have valid phone number");
    }
    if (phoneNumber) {
      if (!phoneType) {
        errors.push("Must include phone type");
      }
    }
    if (bio.length > 280) {
      errors.push("Bio can't be more than 280 characters");
    }
  }, [name, email, phoneNumber, phoneType, bio]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const userInformation = {
    name,
    email,
    phoneNumber,
    phoneType,
    staff,
    bio,
    signUp,
  };

  console.log(userInformation);

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name"> Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div>
          <label htmlFor="email"> Email:</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div>
          <label htmlFor="phoneNumber"> PhoneNumber:</label>
          <input
            id="phoneNumber"
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          ></input>
        </div>
        <div>
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select Phone Type
            </option>

            <option>HOME</option>
            <option>WORK</option>
            <option>MOBILE</option>
          </select>
        </div>
        <div>
          <fieldset id="group1">
            <label htmlFor="staff"> Teacher:</label>
            <input
              name="group1"
              id="staff"
              type="radio"
              onChange={(e) => setStaff(e.target.value)}
              value={staff}
            ></input>
            <label htmlFor="staff"> Student:</label>
            <input
              name="group1"
              id="staff"
              type="radio"
              onChange={(e) => setStaff(e.target.value)}
              value={staff}
            ></input>
          </fieldset>
        </div>
        <div>
          <label htmlFor="bio"> Bio:</label>
          <textarea
            id="bio"
            type="text"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </div>
        <label htmlFor="signUp">SignUp for Email</label>

        <input
          type="checkbox"
          id="signUp"
          onClick={(e) => {
            signUp === false ? setSignUp(true) : setSignUp(false);
          }}
          value={signUp}
        ></input>
      </form>
    </div>
  );
};
export default Form;
