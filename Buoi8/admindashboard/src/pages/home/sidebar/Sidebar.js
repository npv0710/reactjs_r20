import './Sidebar.css';
import { MdControlCamera } from 'react-icons/md';
import CustomLink from '../../../_sharecomponents/customlinks/CustomLink';
import { menuLinks } from '../../../data/data';

const Sidebar = (props)=> {
    return(
        <div 
            className={
                props.sidebarIsOpen ? 
                'sidebar open' : 'sidebar'
            }
        >   
            <div className='sidebar-header'>
                <img src="../../../logo192.png" />
                <h3>REACT.JS</h3>
            </div>
            <div className='sidebar-menu'>
                <div className='dashboard'>
                    <MdControlCamera />
                    <span>Dashboard</span>
                    <span>new</span>
                </div>
                <CustomLink menuLinks={menuLinks} />
            </div>
            <div className='sidebar-bottom'>
                <h4>Creative</h4>
            </div>
        </div>
    )
}

export default Sidebar;