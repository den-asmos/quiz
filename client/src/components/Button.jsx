const Button = ({ title, onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`my-2 py-2 px-4 text-white font-semibold bg-[var(--color-green)] rounded-md enabled:hover:opacity-70 duration-150 ease-in ${
        disabled && 'opacity-50'
      }`}
    >
      {title || children}
    </button>
  );
};

export default Button;
