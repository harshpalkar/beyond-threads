import React from "react";
import { useState } from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { SignInUserWithEmailPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocument } from "../../utils/firebase/firebase.utils";
import { getAuth } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import "../form-input/form-input.styles.scss";
import "../sign-in-form/sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  //using the setter function

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await SignInUserWithEmailPassword(email, password);
      console.log(response);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Wrong Password!");
      } else if (error.code === "auth/user-not-found") {
        alert("You might want to Sign Up first");
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account?</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>
          <Button
            buttonType="googleInverted"
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
