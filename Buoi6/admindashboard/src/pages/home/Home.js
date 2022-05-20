import { Switch, Route } from "react-router-dom"
import Sidebar from "./sidebar/Sidebar"
import Header from "./header/Header"

import logoImage from './logo_image.png'

const Home = (props) => {
    const handleClickMenuIcon = () => {

    }

    return (
        <>
            <div className="home-container">
                <Sidebar />
                <div className={props.sidebarIsOpen ? "home-main sidebar-open": "home-main"}>
                    <Header clickMenuIcon={handleClickMenuIcon}/>
                    <div className="main-content">
                        <Switch>
                            <Route path="/user-info"/>
                            <Route path="/list-groups"/>
                        </Switch>
                    </div>
                </div>
            </div>
            <img src={logoImage}/>
        </>
    )
}

export default Home