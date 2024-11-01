import CustomLineChart from '@/components/orderflow/chart/page'
import OrderflowPanel from '@/components/orderflow/sidebar/page'
import { Box } from '@mui/material'
import React from 'react'

const OrderFlow = () => {
  return (
    <Box sx={{
        background:'#111',
        width:'100%',
        height:'calc(100vh - 66px)',
        display:'flex',
        position:'relative'
      }}>
        <Box sx={{
            width:'calc(100% - 300px)',
            backgroundColor: '#111',  // Set background color to #111
            overflow: 'hidden',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
            width: '0px',
            }
        }} 
        >
            <CustomLineChart/>
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
       }}>
          <OrderflowPanel/>
       </Box>
    </Box>
  )
}

export default OrderFlow