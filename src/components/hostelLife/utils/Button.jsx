export default function Button({ children, title, className, ...props }) {
    return (
        <div className="hover:bg-gray-200">
            <div className="flex justify-start mt-8">
                <button 
                    className={`text-xl font-medium text-[#003482] ${className}`} 
                    {...props}
                >
                    {children}
                </button>
            </div>
            <div>
                <p className="flex justify-start text-[1rem] text-gray-500">{title}</p>
            </div>
        </div>
    );
}