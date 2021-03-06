import { useState } from 'react';
import { Switch, Route, Redirect }  from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';

import UserInfo from './userinfo/UserInfo';
import ListGroups from './listgroups/ListGroups';
import Settings from './settings/Settings';

import WithLoading from '../../_sharecomponents/HOCComponent/loading/WithLoading';

import './Home.css';

const UserWithLoading = WithLoading(UserInfo)
const ListGroupsWithLoading = WithLoading(ListGroups)
const SettingsWithLoading = WithLoading(Settings)

const Home = (props) => {
    const [sideBarIsOpen, setSidebarIsOpen] = useState(true)
    const handleClickMenuIcon = (sidebarIsOpen) => {
        setSidebarIsOpen(sidebarIsOpen)
    }

    return(
        <div className='home-container'>
            <Sidebar sideBarIsOpen={sideBarIsOpen}/>
            <div className={sideBarIsOpen ? 'home-main sidebar-open' : 'home-main'}>
                <Header clickMenuIcon={handleClickMenuIcon}/>
                <div className='main-content'>
                    <Switch>
                        <Route path="/user-info" component={UserWithLoading} />
                        <Route path="/list-groups" component={ListGroupsWithLoading} />
                        <Route path="/settings" component={SettingsWithLoading} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Home;