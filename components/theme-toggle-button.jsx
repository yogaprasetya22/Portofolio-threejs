import { AnimatePresence, motion } from 'framer-motion'
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  Select
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
// import { useState, useEffect } from 'react'
import i18n from 'i18next'
import { useEffect, useState } from 'react'

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

export const TranslateButton = () => {
  const handleTranslate = e => {
    if (e.target.value === 'en') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('id')
    }
  }

  return (
    <Select
      w={'8rem'}
      size="md"
      onChange={handleTranslate}
      variant="filled"
      display={{ base: 'none', md: 'inline-block' }}
      defaultValue={i18n.language}
    >
      <option value="en">English</option>
      <option value="id">Indonesia</option>
    </Select>
  )
}
export const TranslateButtonMobile = () => {
  const [translate, setTranslate] = useState('')

  const handleTranslate = e => {
    if (e.target.value === 'en') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('id')
    }
  }

  return (
    <Select
      w={'8rem'}
      size="md"
      onChange={handleTranslate}
      variant="filled"
      display={{ base: 'inline-block', md: 'none' }}
      defaultValue={i18n.language}
    >
      <option value="en">English</option>
      <option value="id">Indonesia</option>
    </Select>
  )
}
