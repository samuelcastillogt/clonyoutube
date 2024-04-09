const Skeleton = (props)=>{
    const {title} = props
    return(
        <div style={{margin: 10, padding: 10, border: "1px solid white"}}>
            <div style={{width: "200px", height: "200px",backgroundColor: "grey"}}></div>
            <div style={{width: "200px", height: "100px",backgroundColor: "grey", marginTop: "10px"}}>{title}</div>

        </div>
    )
}
export default Skeleton