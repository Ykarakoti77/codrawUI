'use client'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'
import { colors } from '@/Theme/theme'
import { SquareIconButton } from '../Common/SquareIconButton'

const Search = () => {
  return (
    <Box sx={{ display: 'flex', gap: 1.5, p: '0.25em', m: '0.25em' }}>
      <Box flex={1}>
        <TextField
          sx={{ width: '100%', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)'}}
          id="input-with-icon-textfield"
          placeholder="Add Team"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddIcon />
              </InputAdornment>
            ),
            sx: {
              borderRadius: '8px',
              '& .MuiOutlinedInput-input': {
                height: '100%', // Adjust the height of the input field
                padding: '0 14px', // Adjust padding for the input field
                fontSize: '15px',
              },
              height: '32px', // Adjust the height here
              fontSize: '15px',
              width: '100%',
            },
          }}
          variant="outlined"
        />
      </Box>
      <Box>
        <SquareIconButton icon={<SearchIcon />} />
      </Box>
    </Box>
  )
}

export default Search
