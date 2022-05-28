import './Sidebar.css';
import { MdControlCamera } from 'react-icons/md';
import CustomLink from '../../../_sharecomponents/customlinks/CustomLink';
import { menuLinks } from '../../../data/data';

import { connect } from 'react-redux';

const Sidebar = (props)=> {
    console.log('side bar props: ')
    console.log(props)

    return(
        <div 
            className={
                props.sidebarIsOpen ? 
                'sidebar' : 'sidebar close'
            }
        >   
            <div className='sidebar-header'>
                <img src="../../../logo192.png" />
                <h3>REACT.JS</h3>
            </div>
            <div className='sidebar-menu'>
                <div className='dashboard'>
                    <MdControlCamera size='1.5rem'/>
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

const mapStateToProps = (state) => {
    return {
        sidebarIsOpen: state.view.sidebarIsOpen
    }
}

export default connect(mapStateToProps, null)(Sidebar);