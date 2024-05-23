import { Avatar } from '@mui/material'
import React from 'react'

interface CustomListIconProps {
  alt: string
  src: string
  borderRadius?: string
}

export const CustomSquareAvatar: React.FC<CustomListIconProps> = ({
  alt,
  src,
  borderRadius = '8px'
}) => {
  return (
    <Avatar
      alt={alt}
      src={src}
      sx={{ borderRadius: borderRadius, width: '100%', height: '100%' }}
    />
  )
}
