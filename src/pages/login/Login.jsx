import { InputForm} from "../../components/inputs/Inputs"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { getLogin } from "../../helpers/getLogin";

export const Login=()=>{

    const schema = Yup.object({
        email:Yup.string().required("El correo es requerido").email('Correo invalido'),
        password: Yup.string().required("La contraseña es obligatoria")
    })

    const styleInput = "py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver:yupResolver(schema)
    });
    const onSubmit = data =>{
    alert("Hola")
    getLogin(data).then(res=>console.log(res))
};

    return(
        <div className="flex items-center justify-center h-[calc(80vh_-_88px)]">
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h2 className="mb-12 text-center text-5xl font-extrabold">BIENVENIDO</h2>
    <form>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-sm rounded-md space-y-5">
        
        <p>Dirección de correo electrónico</p>
        <InputForm tipo="text" placeholder="ejemplo@hotmail.com" name="email" style={styleInput} register={register}  errors={errors}/>
        <p>Ingresa tu contraseña</p>
        <InputForm tipo="password" placeholder="*********" name="password" style={styleInput} register={register} errors={errors}/>
        <div className="mt-6">
        <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition" type="submit">Ingresar</button>
      </div>
      </form>
      
      <div className="mt-6 flex items-center justify-between">  
        <div className="flex items-center">
          <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
          <label for="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> Recordar Contraseña </label>
        </div>
        <a href="#" className="text-sm"> ¿Olvidaste tu contraseña? </a>
      </div>
      
      <div clasNames="mt-6 text-center">
        <a href="#" className="underline">Regístrese para obtener una cuenta</a>
      </div>
    </form>
  </div>
</div>
    )
}