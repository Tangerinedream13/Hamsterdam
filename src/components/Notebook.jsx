import { Box, Heading, Text, VStack, HStack, Badge, IconButton } from '@chakra-ui/react'
import { chapters } from '../data/chapters.js'

function Notebook({ open, onClose, collectedClueIds }) {
  const collectedSet = new Set(collectedClueIds)

  return (
    <>
      {open && (
        <Box
          position="fixed"
          inset="0"
          bg="blackAlpha.500"
          zIndex={10}
          onClick={onClose}
        />
      )}
      <Box
        position="fixed"
        top="0"
        right="0"
        height="100vh"
        width={{ base: '100%', sm: '360px' }}
        bg="paper.50"
        borderLeft="4px solid"
        borderColor="hamster.500"
        boxShadow="-4px 0 16px rgba(0,0,0,0.2)"
        zIndex={11}
        transform={open ? 'translateX(0)' : 'translateX(100%)'}
        transition="transform 0.25s ease"
        overflowY="auto"
      >
        <Box p={5}>
          <HStack justify="space-between" mb={4}>
            <Heading size="lg" color="hamster.600">
              📔 Clue Notebook
            </Heading>
            <IconButton aria-label="Close notebook" size="sm" onClick={onClose} variant="ghost">
              ✕
            </IconButton>
          </HStack>

          {collectedClueIds.length === 0 && (
            <Text color="gray.600" fontStyle="italic">
              No clues found yet — search each chapter to fill these pages.
            </Text>
          )}

          <VStack align="stretch" gap={5}>
            {chapters.map((chapter) => {
              const found = chapter.clues.filter((c) => collectedSet.has(c.id))
              if (found.length === 0) return null
              return (
                <Box key={chapter.id}>
                  <Text fontWeight="bold" color="canal.600" mb={2}>
                    {chapter.title}
                  </Text>
                  <VStack align="stretch" gap={2}>
                    {found.map((clue) => (
                      <Box
                        key={clue.id}
                        bg="paper.100"
                        borderRadius="md"
                        p={3}
                        border="1px solid"
                        borderColor="paper.200"
                      >
                        <HStack mb={1}>
                          <Text fontSize="xl">{clue.emoji}</Text>
                          <Text fontWeight="semibold">{clue.title}</Text>
                        </HStack>
                        <Text fontSize="sm" color="gray.700">
                          {clue.description}
                        </Text>
                      </Box>
                    ))}
                  </VStack>
                </Box>
              )
            })}
          </VStack>

          {collectedClueIds.length > 0 && (
            <Badge mt={5} colorPalette="hamster" fontSize="sm">
              {collectedClueIds.length} clue{collectedClueIds.length === 1 ? '' : 's'} collected
            </Badge>
          )}
        </Box>
      </Box>
    </>
  )
}

export default Notebook
