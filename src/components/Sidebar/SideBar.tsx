'use client'

import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Search from './Search'
import { Profile } from './Profile'
import { Sections } from './Sections'
import { colors } from '@/Theme/theme'
import { FavouriteSection } from './FavouriteSection'
import { CustomListItem } from '../Common/CustomListItem'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { text } from 'stream/consumers'

export const Sidebar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 0.5,
        height: '100%',
        width: '21em',
        backgroundColor: colors.greyAccent[20],
      }}
    >
      <Box>
        <Profile />
        <Search />
        <Sections />
        <FavouriteSection />
      </Box>
      <Box sx={{ p: '0.25em', m: '0.25em' }}>
        <CustomListItem
          icon={<LogoutOutlinedIcon />}
          text={'Logout'}
          isSelected={false}
          onSelect={() => {}}
        />
      </Box>
    </Box>
  )
}
