import './Header.css'

import { MdMenu } from 'react-icons/md'

import { useState } from 'react'

import { Link } from 'react-router-dom'


const Header = (props)=> {
    const [isOpen, setIsOpen] = useState(false)
    const clickMenuIcon = () => {
        //alert('123')
        setIsOpen(!isOpen)

        //props.clickMenuIcon(!isOpen)

        props.toggleSidebar()

    }

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    const _onClickAvatar = () => {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    const handleClickOutSideDropdown = () => {
        setDropdownIsOpen(false)
    }

    return(
        <div className='header'>
            <div className='row-1'>
                <div className='nav-left'>
                    <MdMenu className='menu-icon' onClick={clickMenuIcon} />
                    <Link to="/">Dashboard</Link>
                    <Link to="/user-info">User Info</Link>
                    <Link to="/list-groups">List Groups</Link>
                    <Link to="/settings">Settings</Link>
                </div>
                <div className='nav-right'>
                    <div className='header-avatar' onClick={_onClickAvatar}>
                        <img src="../../images/avatar.png"/>
                    </div>
                    {/* {   
                        dropdownIsOpen && <Dropdown setDropdownClose={handleClickOutSideDropdown}/>
                    } */}
                </div>
            </div>
            <div className='row-2'>
                
            </div>
        </div>
    )
}

export default Header;