'use client'

import { colors } from '@/Theme/theme'
import { Box, Typography } from '@mui/material'
import GroupAvatars from '../Common/GroupAvatar'
import { ProTags } from './ProTags'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'

interface ProContainerProps {
  tags: Tag[]
  title: string
  description: string
  messageCount: number
}

export const ProContainer: React.FC<ProContainerProps> = ({
  tags,
  title,
  description,
  messageCount,
}) => {
  // const messageCount = 6
  //   const tags = [
  //     {
  //       name: 'design',
  //       color: colors.greyAccent[200],
  //       borderColor: colors.greyAccent[400],
  //       textColor: colors.greyAccent[700],
  //     },
  //     {
  //       name: 'development',
  //       color: colors.babyPink[100],
  //       borderColor: colors.babyPink[200],
  //       textColor: colors.babyPink[900],
  //     },
  //     {
  //       name: 'production',
  //       color: colors.greenAccent[100],
  //       borderColor: colors.greenAccent[200],
  //       textColor: colors.greenAccent[900],
  //     },
  //     {
  //       name: 'production',
  //       color: colors.purpleAccent[100],
  //       borderColor: colors.purpleAccent[200],
  //       textColor: colors.purpleAccent[900],
  //     },
  //   ]
  return (
    <Box
      sx={{
        width: '20em',
        m: '1em',
        padding: '1em',
        borderRadius: '8px',
        backgroundColor: colors.greyAccent[20],
      }}
    >
      <ProTags tags={tags} />
      <Typography pt={'1em'} pb={'0.5em'} variant="subtitle1">
        {title}
      </Typography>
      <Typography
        variant="body2"
        fontSize={'13px'}
        color={colors.greyAccent[500]}
      >
        {description}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          mt: '1em',
          p: '0.1em',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <GroupAvatars />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ChatBubbleOutlineOutlinedIcon
            sx={{
              fontSize: '18px',
              color: colors.greyAccent[500],
            }}
          />
          <Typography variant="body2" color={colors.greyAccent[500]}>
            {messageCount}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
