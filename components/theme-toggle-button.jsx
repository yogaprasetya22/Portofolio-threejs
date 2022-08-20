import { AnimatePresence, motion } from 'framer-motion'
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'

export const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Box display={{ base: 'none', md: 'inline-block' }}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={useColorModeValue('light', 'dark')}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label="Toggle theme"
            borderRadius={100}
            colorScheme={useColorModeValue('yellow', 'blue')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
          ></IconButton>
        </motion.div>
      </AnimatePresence>
    </Box>
  )
}
export const ThemeToggleButtonMobile = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          borderRadius={100}
          colorScheme={useColorModeValue('yellow', 'blue')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}
