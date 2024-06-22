import { colors } from '@/Theme/theme'
import {
  Icon,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import React, { ReactNode } from 'react'

interface CustomListIconProps {
  icon: ReactNode
  text: string
  isSelected: boolean
  onSelect: () => void
}

export const CustomListItem: React.FC<CustomListIconProps> = ({
  icon,
  text,
  isSelected,
  onSelect,
}) => {
  const color = isSelected ? colors.greyAccent[900] : colors.greyAccent[700]
  return (
    <ListItem disablePadding disableGutters>
      <ListItemButton
        selected={isSelected}
        sx={{ borderRadius: '8px', height: '2.2em', my: '0.2em' }}
        onClick={onSelect}
      >
        <Icon sx={{ color: color, mr: '1em' }}>{icon}</Icon>
        <ListItemText>
          <Typography variant="body2" color={color}>
            {text}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )
}
