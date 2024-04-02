import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    " inline-block disabled:cursor-not-allowed rounded-full bg-violet-300 text-sm font-semibold uppercase tracking-wide text-stone-800 outline-none transition-colors duration-300 hover:bg-violet-200 focus:ring focus:ring-violet-500 focus:ring-offset-2 active:bg-orange-200";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 ",
    small: base + " py-2 px-4 md:px-5 md:py-2.5 text-xs ",
    secondary:
      " inline-block disabled:cursor-not-allowed text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 outline-none transition-colors duration-300 hover:bg-cyan-300 focus:ring focus:ring-cyan-500 focus:ring-offset-2 active:bg-rose-200 px-4 py-2.5 md:px-6 md:py-3.5 ",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
