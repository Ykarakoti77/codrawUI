'use client'

import { Box, List, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomListItem } from '../Common/CustomListItem'
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';


export const FavouriteSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleSelect = (x: number) => {
    setSelectedIndex(x)
  }

  const sections = [
    {
      icon: <ArchitectureOutlinedIcon fontSize='small'/>,
      text: 'Data Structures and Algorithms',
    },
    {
      icon: <ArchitectureOutlinedIcon fontSize='small'/>,
      text: 'Search Design',
    },
  ]

  return (
    <Box sx={{ p: '0.25em', m: '0.25em' }}>
      <Typography variant="subtitle2">FAVOURITES</Typography>
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
