import Search from "./Search"

const Header = (props)=>{
    const {action} = props
    return(
        <header>
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzzHh-MyU7rFnFPUQ0JZXHx9pSEpV-cNqjylYkW1P2g&s" />
            <Search action={action}/>
        </header>
    )
}
export default Header