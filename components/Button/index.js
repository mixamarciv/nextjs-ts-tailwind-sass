const Button = ({ classes, children }) => {
    return (
        <button
            className={` bg-red-500 font-bold text-white px-6 py-2 ${classes} `}
        >
            {children}
        </button>
    );
};

export default Button;
