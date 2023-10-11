export const InputForm = ({ tipo, style, name, placeholder, register, errors }) => {
    return (
        <div className="w-full">
            <input type={tipo} placeholder={placeholder} className={style} name={name} {...register(name)} />
            <p className="text-red-500 text-xs ml-3 mt-1">{errors[name]?.message}</p>
        </div>
    )
}
