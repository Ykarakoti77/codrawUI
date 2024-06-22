'use client'
import { colors } from '@/Theme/theme'
import { Chip, IconButton, Stack } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'

interface ProTagsInterface {
  tags: Array<Tag>
}

export const ProTags: React.FC<ProTagsInterface> = ({ tags }) => {
  return (
    <Stack
      display={'flex'}
      alignContent={'center'}
      flexDirection={'row'}
      gap={1}
      flexWrap={'wrap'}
    >
      {tags.map((tag) => (
        <Chip
          label={tag.name}
          size="small"
          sx={{
            color: tag.textColor,
            backgroundColor: tag.color,
            border: '0.5px solid',
            borderRadius: '8px',
            borderColor: tag.borderColor,
          }}
        />
      ))}
      <IconButton
        sx={{
          height: '22px',
          width: '22px',
          alignSelf: 'center',
          color: colors.greyAccent[500],
          backgroundColor: colors.greyAccent[100],
          borderRadius: '7px',
        }}
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Stack>
  )
}
