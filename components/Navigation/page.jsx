import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <Box className='flex items-center gap-10 px-5 py-3 bg-black'>
        <Typography variant='h4' className='text-white font-mont'>
            Logo
        </Typography>
        <Link href={'/'} className='text-white font-mont'>classic</Link>
        <Link href={'/orderflow'} className='text-white font-mont'>orderflow</Link>
    </Box>
  )
}

export default Navigation