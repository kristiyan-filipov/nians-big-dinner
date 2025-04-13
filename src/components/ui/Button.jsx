const Button = ({ text, rightIcon, leftIcon, className, onClick }) => {
    return (
      <button
        className={`${className} flex items-center gap-0.5 sm:gap-1 z-10 h-9 cursor-pointer rounded-3xl bg-gray-50 px-2 py-1 text-black 
        text-xs uppercase font-dosis-regular transition-transform duration-200 hover:scale-90`}
      onClick={onClick}>
        <div className='font-materialsymbols-regular'>{leftIcon}</div>
        {text}
        <div className='font-materialsymbols-regular'>{rightIcon}</div>
        </button>
    );
  };
  
  export default Button;
  