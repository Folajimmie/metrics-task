export const Input = ({ labelProps, inputProps, error, ...rest }) => {
    return(
        <div>
            {/* <label className="block text-whiteText text-heading mb-[4px]"
                    htmlFor={inputProps.email}
                    {...labelProps}>
                        {labelProps.title}
            </label> */}
            <div className={`flex w-full h-[57.03px] relative mb-[4px] border rounded-[4px] ${error ? 'border-error' : 'border-primary-80'} ${error ? 'text-error' : 'text-whiteText'}`}>
                <input className="focus:outline-none w-[316px] md:w-[390px] lg:w-[416px] bg-primary-100 px-4" {...inputProps} />
            </div>
            {error && <p className="text-error text-caption">{error}</p>}
        </div>
    );
};