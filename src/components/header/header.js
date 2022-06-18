import React from "react";
import "./header.scss"

import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications, MdApps} from "react-icons/md"

const Header = ({handleToggleSidebar}) =>{

    

    return(
        <div className=" header">
            <FaBars className="header_menu" size={26}
            onClick={()=>handleToggleSidebar()}
            />
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" size={22}  className="header_logo"/>
            <form>
                <input placeholder="search" type="text"/>
                <button type="submit">
                    <AiOutlineSearch size={22}/>
                </button>
            </form>
            <div className="header_icons">  
            <MdNotifications size={28}/>
            <MdApps size={28}/>
                <img src="https://www.pngarts.com/files/3/Avatar-PNG-Pic.png" alt="" />

            </div>
        </div>
    )
}

export default Header