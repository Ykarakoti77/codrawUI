'use client'

import { Avatar, Box, IconButton } from '@mui/material'
import React from 'react'
import { colors } from '@/Theme/theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import SearchIcon from '@mui/icons-material/Search'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined'
import OpenWithIcon from '@mui/icons-material/OpenWith'
import { useLayout } from '@/Context/LayoutContext'
const img =
  'https://ih1.redbubble.net/image.3873267659.0292/flat,750x1000,075,f.jpg'

export const SidebarMinimized = () => {
  const { toggleSidebar } = useLayout()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 0.2,
        height: '100%',
        backgroundColor: colors.greyAccent[20],
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0.6,
        }}
      >
        <IconButton>
          <Avatar alt="profile image" src={img} sx={{ borderRadius: '8px' }} />
        </IconButton>
        <IconButton onClick={toggleSidebar}>
          <OpenWithIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <HomeOutlinedIcon />
        </IconButton>
        <IconButton>
          <FolderOutlinedIcon />
        </IconButton>
        <IconButton>
          <GroupOutlinedIcon />
        </IconButton>
        <IconButton>
          <SpaceDashboardOutlinedIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <IconButton>
          <LogoutOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
