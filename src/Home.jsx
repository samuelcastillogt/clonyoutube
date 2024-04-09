import React, {Fragment, useState, useEffect} from "react"
import Header from "./components/Header"
import Skeleton from "./components/Skeleton"
const dummydata = [
    {
        title: "ejemplo"
    },
    {
        title: "ejep,lo 2"
    },
    {
        title: "3"
    },
    {
        title: "1"
    },
    {
        title: "2"
    },
    {
        title: "ultimo"
    },
]
const Home = ()=>{
    const [loading, setLoading] = useState(false)
    const actualizarStado= ()=>{
        setLoading(!loading)
    }
    useEffect(()=>{
        alert("Hola mundo")
    }, [loading])
    return(
        <>
         <Header action={actualizarStado}/>
         {
            loading == false ? dummydata.map(item => <Skeleton title={item.title} key={item.title}/>) : <h1>Cargando</h1>
         }          
        </>

    )
}
export default Home