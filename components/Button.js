export default function Button({children, className, ...props}) {
    return(
        <button
        className={`${className} cursor-pointer hover:bg-dark hover:text-light uppercase rounded text-center font-normal px-10 py-3 border-2 border-dark tracking-widest`}
        {...props}
        >
            {children}
        </button>
    )
};
