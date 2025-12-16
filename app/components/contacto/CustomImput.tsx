const CustomInput = ({ type, id, name, placeholder, required = false, label, errors }: any) => {
    return (
        <div className="w-full">
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">
                {label}
            </label> 
            
            {type === "textarea" && (
                <textarea
                    id={id || ""}
                    name={name || ""}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none h-32"
                    placeholder={placeholder || ""}
                    required={required}
                ></textarea>
            )}

            {(type === "text" || type === "email") && (
                <input
                    type={type || "text"}
                    id={id || ""}
                    name={name || ""}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder={placeholder || ""}
                    required={required}
                />
            )}

            {errors.map((error: any, index: number) => {
                if (error.field === name) {
                    return (
                        <span key={index} className="text-sm text-red-500 mt-1 block">
                            {error.message}
                        </span>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default CustomInput;