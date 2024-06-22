import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { SquareIconButton } from '../Common/SquareIconButton'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import { useLayout } from '@/Context/LayoutContext'

const img =
  'https://ih1.redbubble.net/image.3873267659.0292/flat,750x1000,075,f.jpg'

export const Profile = () => {
  const { toggleSidebar } = useLayout()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: '0.25em',
        m: '0.25em',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt="profile image" src={img} sx={{ borderRadius: '8px' }} />
        <Typography variant="h6" sx={{ marginLeft: '12px' }}>
          Yash Karakoti
        </Typography>
      </Box>
      <Box>
        <SquareIconButton
          icon={<FirstPageIcon />}
          handleClick={toggleSidebar}
        />
      </Box>
    </Box>
  )
}
