'use client'
import React from 'react';
import { Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 

function DropdownMenu() {

  return (
    <Box>
      <Box 
        className='border-2 border-gray-200 rounded px-1 py-1 text-white bg-transparent w-full flex justify-between cursor-pointer'
      >
        SPX
        <ArrowDropDownIcon />
      </Box>
    </Box>
  );
}

export default DropdownMenu;
