const Search = (props)=>{
    function search(){
        alert("Buscando")
    }
    return(
        <>
            <input  className="input"/>
            <button onClick={props.action}>Buscar</button>
        </>
    )
}
export default Search