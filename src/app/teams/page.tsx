import { TeamBox } from '@/components/Teams/TeamBox'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Teams = () => {
  return (
    <Box
      sx={{
        p: 0.5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5">Teams</Typography>
      <TeamBox />
    </Box>
  )
}

export default Teams
