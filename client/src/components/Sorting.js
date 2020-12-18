import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Pri_Asc from './Pri_Asc';
import Pri_Dsc from './Pri_Dsc';
import Rat_Asc from './Rat_Asc';
import Rat_Dsc from './Rat_Dsc';

const Sorting = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} style = {{paddingRight : "20%"}}>
      <DropdownToggle caret>
        Sorting
        </DropdownToggle>
      <DropdownMenu> 
          <Rat_Dsc/>
          <Rat_Asc/>
          <Pri_Dsc/>
          <Pri_Asc/>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Sorting;