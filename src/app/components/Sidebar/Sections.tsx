'use client'

import { Box, List } from '@mui/material'
import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import { CustomListItem } from '../Common/CustomListItem'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined'

export const Sections = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  
  const handleSelect = (x: number) => {
    setSelectedIndex(x)
  }

  const sections = [
    { icon: <HomeOutlinedIcon />, text: 'Overview' },
    { icon: <FolderOutlinedIcon />, text: 'Project' },
    { icon: <GroupOutlinedIcon />, text: 'Team' },
    { icon: <SpaceDashboardOutlinedIcon />, text: 'Dashboard' },
  ]

  return (
    <Box sx={{ px: '0.25em', m: '0.25em', py: '1.5em' }}>
      <List>
        {sections.map((section, index) => (
          <CustomListItem
            key={index}
            icon={section.icon}
            text={section.text}
            isSelected={selectedIndex === index}
            onSelect={() => handleSelect(index)}
          />
        ))}
      </List>
    </Box>
  )
}
