import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Typography } from '@mui/material'

const url =
  'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
export default function GroupAvatars() {
  const avatars = [
    {
      src: url,
      alt: 'Remy Sharp',
    },
    {
      src: url,
      alt: 'Remy Sharp',
    },
    {
      src: url,
      alt: 'Remy Sharp',
    },
    {
      src: url,
      alt: 'Remy Sharp',
    },
    {
        src: url,
        alt: 'Remy Sharp',
      },
  ]
  return (
    <AvatarGroup max={4} sx={{
        '& .MuiAvatar-root': {
          width: 25,
          height: 25,
        },
        '& .MuiAvatarGroup-avatar': {
          width: 25,
          height: 25,
          fontSize: 12,
        },}}>
      {avatars.map((av, index) => (
        <Avatar key={index} src={av.src} alt={av.alt} />
      ))}
    </AvatarGroup>
  )
}
