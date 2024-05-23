'use client'

import { colors } from '@/Theme/theme'
import { Box, IconButton } from '@mui/material'
import React, { ReactNode } from 'react'

interface SquareIconButtonProps {
  icon: ReactNode
}

export const SquareIconButton: React.FC<SquareIconButtonProps> = ({ icon }) => {
  return (
    <Box>
      <IconButton
        aria-label="delete"
        sx={{
          border: '1px solid',
          borderColor: colors.greyAccent[300],
          borderRadius: '8px',
          height: '32px',
          width: '32px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        }}
      >
        {icon}
      </IconButton>
    </Box>
  )
}
