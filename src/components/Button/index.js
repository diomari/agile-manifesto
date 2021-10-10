import "./Button.css";

function Button({ children, type, onClick, ...rest }) {
  const typeClass = type ? `btn-${type}` : "";
  return (
    <button {...rest} className={`btn ${typeClass}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
