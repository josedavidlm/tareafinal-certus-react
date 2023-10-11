export const getLogin = async (login)=>{
    const response = await fetch("https://api.escuelajs.co/api/v1/auth/login",{
        method:"POST",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify(login)
    })
    const data = response.json()
        return data
}
