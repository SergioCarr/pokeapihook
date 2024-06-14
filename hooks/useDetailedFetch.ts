import { useEffect, useState } from "react"

const useDetailedFetch = (url) => {

    const [height, setHeight]= useState(0)
    const [name, setName] = useState("")
    const [types, setTypes] = useState("")
    const [weight, setWeight] = useState(0)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchPokemons = async () => {
            try{
                setLoading(true)
                const response = await fetch(url) 
                if(response.status != 200){
                    throw new Error("Error en la peticion")
                }
                const data = await response.json()
                setHeight(data.height/10)
                setWeight(data.weight/10)
                setName(data.name)
                if(data.types.length > 1){
                    setTypes(`${data.types[0].type.name},${data.types[1].type.name}`)
                }else{
                    setTypes(`${data.types[0].type.name}`)
                }
                
                
            }catch(error){
                setError(error as any)
            }finally{
                setLoading(false)
            }
            
        }
        fetchPokemons()
    },[])
    return { height, weight, name, types, loading, error };
}
export default useDetailedFetch
    
