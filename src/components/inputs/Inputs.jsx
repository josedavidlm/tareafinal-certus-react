export const InputForm=({tipo,style,name,placeholder,register,errors})=>{
    return(
        <div>
        <input type={tipo} placeholder={placeholder} className={style} name={name} {...register(name)} />
        <p className="text-red-500 text-xs ml-5">{errors[name]?.message}</p>
        </div>
 )  
    }