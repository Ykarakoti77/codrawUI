'use client'
import { colors } from '@/Theme/theme'
import { ProContainer } from '@/components/Project/ProContainer'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Project = () => {
  const tags = [
    {
      name: 'design',
      color: colors.greyAccent[200],
      borderColor: colors.greyAccent[400],
      textColor: colors.greyAccent[700],
    },
    {
      name: 'development',
      color: colors.babyPink[100],
      borderColor: colors.babyPink[200],
      textColor: colors.babyPink[900],
    },
    {
      name: 'production',
      color: colors.greenAccent[100],
      borderColor: colors.greenAccent[200],
      textColor: colors.greenAccent[900],
    },
    {
      name: 'production',
      color: colors.purpleAccent[100],
      borderColor: colors.purpleAccent[200],
      textColor: colors.purpleAccent[900],
    },
  ]
  return (
    <Box
      sx={{
        p: 0.5,
      }}
    >
      <Typography>Project</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box>
          <ProContainer
            title="Notification Flow Design"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
            tags={tags}
            messageCount={6}
          />
          <ProContainer
            title="Notification Flow Design"
            description="Lorem the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
            tags={tags}
            messageCount={6}
          />
          <ProContainer
            title="Notification Flow Design"
            description="Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
            tags={tags}
            messageCount={6}
          />
        </Box>
        <Box>
          <ProContainer
            title="Notification Flow Design"
            description="Loremma type specimen book. It has survived not only five centuries, but also the leap"
            tags={tags}
            messageCount={6}
          />
          <ProContainer
            title="Notification Flow Design"
            description="since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
            tags={tags}
            messageCount={6}
          />
          <ProContainer
            title="Notification Flow Design"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
            tags={tags}
            messageCount={6}
          />
        </Box>
        <Box>
          <ProContainer
            title="Notification Flow Design"
            description="LLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
            tags={tags}
            messageCount={6}
          />
          <ProContainer
            title="Notification Flow Design"
            description="Lorem ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
            tags={tags}
            messageCount={6}
          />
          <ProContainer
            title="Notification Flow Design"
            description="Lorem Ipsum isprinter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
            tags={tags}
            messageCount={6}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Project
