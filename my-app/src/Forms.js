import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    phoneType: "",
    staff: "",
    bio: "",
    signUp: "",
  });

  const validate = () => {
    let errors = [];
    if (user.name.length === 0) {
      errors.push("Name can't be empty");
    }
    if (user.email.length === 0 && !user.email.includes("@")) {
      errors.push("Must have valid email");
    }
    if (user.phoneNumber.length !== 10 && /^[0-9]+$/.test(user.phoneNumber)) {
      errors.push("Must have valid phone number");
    }
    if (user.phoneNumber) {
      if (!user.phoneType) {
        errors.push("Must include phone type");
      }
    }
    if (user.bio.length > 280) {
      errors.push("Bio can't be more than 280 characters");
    }

    return errors;
  };
};
export default Form;
