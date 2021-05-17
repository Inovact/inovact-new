import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {MdAddCircle} from 'react-icons/md';

interface SidebarItem {
    title: string;
    path: string;
    subnav?: SidebarItem[];
}

type SidebarLinkProps = {
    item: SidebarItem;
};

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    font-size: 1.125rem;
    padding: 2rem;
    margin:'30px';
    text-decoration: none;
    color:#fff;
    &:hover {
        background-color:  #FFA500;
        color:black;
        border-left: 3px solid #FFA500;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3rem;
    font-size: 1.125rem;
    padding-left: 3rem;
    text-decoration: none;
    color:#fff;
    &:hover {
        background-color: #FFA500;
        color:black;
    }
`;

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav}  >
                <div >
                  
                    <SidebarLabel style={{display:'flex',
            justifyContent:'space-between',}} > <MdAddCircle />{item.title}   </SidebarLabel>
                   
                </div>
            </SidebarLink>
            {subnav &&
                item?.subnav?.map((subnavItem, index) => {
                    return (
                        <DropdownLink to={subnavItem.path} key={index}>
                            <SidebarLabel><MdAddCircle />{subnavItem.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default Submenu;