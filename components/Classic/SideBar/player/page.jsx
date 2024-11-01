import { Box, Typography } from '@mui/material'
import React from 'react'
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPause } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";


const Player = () => {
  return (
    <Box className='text-white mt-5 border-2 p-3 rounded font-mont'>
        <Box className='flex justify-between'>
            <Typography>1X</Typography>
            <Typography>01:12 PM</Typography>
            <Typography className='cursor-pointer'>X</Typography>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', }}>
            {/* Background Line */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                height: '2px',
                background: '#f2f2f2',
                margin: '20px 0',
                borderRadius: '50px'
            }}>
            </Box>
            {/* Red Dot */}
            <Box sx={{
                position: 'absolute',
                width: '10px',
                height: '10px',
                background: 'radial-gradient(circle, #f8112b, #fcc201)',
                top: '-4px', 
                left: '100%',
                transform: 'translateX(-50%)',
                borderRadius:'50px'
            }}>
            </Box>
        </Box>
        <Box className='flex justify-between'>
            <IoMdArrowDropleft />
            <Box className='flex justify-between gap-5'>
                <FaBackward />
                <FaPause />
                <FaForward />
            </Box>
            <IoMdArrowDropright />
        </Box>
    </Box>
  )
}

export default Player