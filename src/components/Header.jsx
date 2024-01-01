import { useState } from "react"

function Header(){
    const[isOpen, setIsOpend] = useState(false)
    const handleIsOpem = ()=>{
        setIsOpend(true)
    }

    const handleIsClose = ()=>{
        setIsOpend(false)
    }
    return <div className="bg-primaryColor flex justify-between p-5 text-secondaryColor ">
        <h1 className="font-bold text-2xl sm:text-4xl">E-comerce</h1>
        <i style={{display: isOpen === true? "none" : "" }}onClick ={handleIsOpem}class="fa-solid absolute right-2 text-3xl sm:hidden fa-bars"></i>
        <i style={{display: isOpen === true? "block" : "none"}}onClick={handleIsClose} class="fa-solid absolute right-2 text-3xl fa-xmark"></i>
        <ul style={{display: isOpen === true? "block" : ""}} className="hidden sm:flex flex-col mt-10 sm:mt-0 gap-5 sm:flex-row sm:gap-20 text-4xl">
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
        <ol>
            <li className="text-4xl"><i class="fa-solid fa-cart-shopping mr-10"></i></li>
        </ol>
    </div>
}

export default Header