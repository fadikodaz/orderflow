import CustomHorizontalChart from '@/components/Classic/Chart/page'
import ChatBox from '@/components/Classic/ChatBox/page'
import SideBox from '@/components/Classic/SideBar/page'
import { Box } from '@mui/system'
import React from 'react'

const Home = () => {
  return (
    <Box sx={{
        background:'#111',
        width:'100%',
        height:'calc(100vh - 66px)',
        display:'flex',
        position:'relative'
      }}>
       <Box sx={{
        width:'400px',
        overflow:'hidden',
        overflowY:'auto',
        '&::-webkit-scrollbar': {
        width: '6px', // Adjust scrollbar width
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#333', // Background color for track
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#222', // Color for scrollbar handle
          borderRadius: '4px',
        },
       }}>
          <ChatBox/>
       </Box>
       <Box sx={{
        width:'calc(100% - 700px)',
       }} 
       className='flex justify-center'>
          <CustomHorizontalChart/>
       </Box>
       <Box sx={{
        width:'300px',
        height:'100%',
        position:'absolute',
        right:'0',
        borderLeft:'5px solid #222',
        overflow:'hidden',
        overflowY:'auto',
        '&::-webkit-scrollbar': {
        width: '0px', // Adjust scrollbar width
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#333', // Background color for track
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#222', // Color for scrollbar handle
          borderRadius: '4px',
        },
       }}>
          <SideBox/>
       </Box>
    </Box>
  )
}

export default Home