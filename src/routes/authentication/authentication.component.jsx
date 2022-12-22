import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocument } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "../authentication/authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
