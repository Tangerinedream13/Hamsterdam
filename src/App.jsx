import { useEffect, useState } from 'react'
import { Box, Container, Heading, Text, HStack, Button, Flex } from '@chakra-ui/react'
import { chapters, totalClueCount } from './data/chapters.js'
import ChapterView from './components/ChapterView.jsx'
import Notebook from './components/Notebook.jsx'

const STORAGE_KEY = 'hamsterdam-clues'

function loadClues() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function App() {
  const [currentChapterId, setCurrentChapterId] = useState(1)
  const [collectedClueIds, setCollectedClueIds] = useState(loadClues)
  const [notebookOpen, setNotebookOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collectedClueIds))
  }, [collectedClueIds])

  const handleFindClue = (clueId) => {
    setCollectedClueIds((prev) => (prev.includes(clueId) ? prev : [...prev, clueId]))
  }

  const currentChapter = chapters.find((c) => c.id === currentChapterId)

  return (
    <Box minH="100vh" bg="canal.50">
      <Box bg="canal.600" color="white" py={4} px={{ base: 4, md: 8 }}>
        <Flex justify="space-between" align="center" wrap="wrap" gap={3}>
          <Heading size="xl">Hamsterdam 🐹</Heading>
          <Button
            onClick={() => setNotebookOpen(true)}
            bg="hamster.500"
            color="white"
            _hover={{ bg: 'hamster.600' }}
          >
            📔 Notebook ({collectedClueIds.length}/{totalClueCount})
          </Button>
        </Flex>
      </Box>

      <Container maxW="3xl" py={{ base: 6, md: 10 }}>
        <HStack gap={3} mb={6} wrap="wrap">
          {chapters.map((chapter) => (
            <Button
              key={chapter.id}
              onClick={() => setCurrentChapterId(chapter.id)}
              variant={chapter.id === currentChapterId ? 'solid' : 'outline'}
              colorPalette="tulip"
            >
              {chapter.emoji} Chapter {chapter.id}
            </Button>
          ))}
        </HStack>

        <ChapterView
          chapter={currentChapter}
          collectedClueIds={collectedClueIds}
          onFindClue={handleFindClue}
        />

        <Flex justify="space-between" mt={6}>
          <Button
            onClick={() => setCurrentChapterId((id) => Math.max(1, id - 1))}
            isDisabled={currentChapterId === 1}
            variant="ghost"
          >
            ← Previous
          </Button>
          <Button
            onClick={() => setCurrentChapterId((id) => Math.min(chapters.length, id + 1))}
            isDisabled={currentChapterId === chapters.length}
            variant="ghost"
          >
            Next →
          </Button>
        </Flex>

        <Text mt={8} textAlign="center" color="gray.500" fontSize="sm">
          By Olivia Haddon (with parental supervision obvi) 🐹
        </Text>
      </Container>

      <Notebook
        open={notebookOpen}
        onClose={() => setNotebookOpen(false)}
        collectedClueIds={collectedClueIds}
      />
    </Box>
  )
}

export default App
