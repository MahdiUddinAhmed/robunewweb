import React from 'react'
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenue,
    SidebarWrapper
} from './SidebarElemets'

const Sidebar = ({isOpen, toggle}) => {
return (
    <div>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenue>
                    <SidebarLink to ="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to ="panel" onClick={toggle}>Panel</SidebarLink>
                    <SidebarLink to ="projects" onClick={toggle}>Project</SidebarLink>
                    <SidebarLink to ="footer" onClick={toggle}>Contact Us</SidebarLink>
                </SidebarMenue>
            </SidebarWrapper>
        </SidebarContainer>
    </div>
)
}

export default Sidebar
