import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <h1>Sign up with email and password</h1>

      <form onSubmit={() => {}}>
        <label htmlFor="">Display Name</label>
        <input type="text" required />

        <label htmlFor="">Email-id</label>
        <input type="email" required />

        <label htmlFor="">Password</label>
        <input type="password" required />

        <label htmlFor="">Confirm Password</label>
        <input type="password" required />

        <button type="submit">Sigb Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
