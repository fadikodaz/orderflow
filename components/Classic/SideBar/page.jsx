import { Box, Typography } from '@mui/material'
import React from 'react'
import { IoSettings } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import DropdownMenu from './DropDown/page';
import Player from './player/page';


const SideBox = () => {
  return (
    <Box sx={{padding:'10px 20px',}}>
        <Box sx={{
            width:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            color:'white',
        }}>
            <Typography variant='h6'>
                State
            </Typography>
            <Box className='flex gap-5'>
                <IoSettings className='text-xl cursor-pointer' />
                <IoIosArrowForward />
            </Box>
        </Box>
        <Box className='mt-5'>
            <DropdownMenu/>
        </Box>
        <Box className='text-white mt-5 border-2 h-[150px] rounded overflow-hidden'>
            <Box className='flex justify-center items-center text-xl font-mont w-full h-[50px] border-b-2 cursor-pointer overflow-hidden hover:bg-[#df3a4e]'>Full</Box>
            <Box className='flex justify-center items-center text-xl font-mont w-full h-[50px] border-b-2 cursor-pointer hover:bg-[#df3a4e]'>Next</Box>
            <Box className='flex justify-center items-center text-xl font-mont w-full h-[50px] bg-[#df3a4e] overflow-hidden cursor-pointer'>option profile</Box>
        </Box>
        <Box className='text-white mt-5'>
            <Box className='text-2xl border-b-2 py-2 mb-3'>
                Update
            </Box>
            <Box className='flex justify-between'>
                <Typography>Date</Typography>
                <Typography>10/20/2024</Typography>
            </Box>
            <Box className='flex justify-between'>
                <Typography>Time</Typography>
                <Typography>01:03 PM</Typography>
            </Box>
            <Box className='flex justify-between mb-5'>
                <Typography>Spot</Typography>
                <Typography>4249:59</Typography>
            </Box>
            <Box className='flex justify-center items-center text-xl font-mont w-full h-[45px] bg-gradient-to-tr to-[#f8112b] from-[#fcc201] overflow-hidden rounded cursor-pointer'>Load History</Box>
        </Box>
        <Box>
            <Player/>
        </Box>
    </Box>
  )
}

export default SideBox