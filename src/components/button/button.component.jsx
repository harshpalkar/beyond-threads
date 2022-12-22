import "../button/button.styles.scss";

const button_type_class = {
  google: "google-sign-in",
  inverted: "inverted",
  googleInverted: "google-inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${button_type_class[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
