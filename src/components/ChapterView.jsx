import { useState } from 'react'
import { Box, Heading, Text, VStack, HStack, Button } from '@chakra-ui/react'

function ClueSearch({ clue, found, onFind }) {
  if (found) {
    return (
      <Box bg="paper.100" borderRadius="md" p={3} border="1px solid" borderColor="paper.200">
        <HStack mb={1}>
          <Text fontSize="xl">{clue.emoji}</Text>
          <Text fontWeight="semibold">{clue.title}</Text>
          <Text color="green.600" fontSize="sm">
            ✓ added to notebook
          </Text>
        </HStack>
        <Text fontSize="sm" color="gray.700">
          {clue.description}
        </Text>
      </Box>
    )
  }
  return (
    <Button variant="outline" colorPalette="canal" onClick={() => onFind(clue.id)} alignSelf="flex-start">
      🔍 Search for a clue
    </Button>
  )
}

function CipherPuzzle({ cipher, decoded, onDecode }) {
  return (
    <Box bg="paper.100" borderRadius="md" p={4} border="1px solid" borderColor="paper.200">
      <Text fontWeight="semibold" mb={2}>
        📜 Coded message:
      </Text>
      <Text fontFamily="monospace" fontSize="lg" letterSpacing="wide" mb={3}>
        {cipher.scrambled}
      </Text>
      {!decoded ? (
        <VStack align="flex-start" gap={2}>
          <Text fontSize="sm" color="gray.600">
            Hint: {cipher.hint}
          </Text>
          <Button colorPalette="tulip" onClick={onDecode}>
            🕵️ Decode the message
          </Button>
        </VStack>
      ) : (
        <Text fontWeight="bold" color="tulip.600" fontSize="lg">
          {cipher.solved}
        </Text>
      )}
    </Box>
  )
}

function ChapterView({ chapter, collectedClueIds, onFindClue }) {
  const [cipherDecoded, setCipherDecoded] = useState(false)
  const collectedSet = new Set(collectedClueIds)

  const handleDecode = () => {
    setCipherDecoded(true)
    onFindClue(`chapter-${chapter.id}-cipher`)
  }

  return (
    <Box bg="white" borderRadius="lg" p={{ base: 5, md: 8 }} boxShadow="md">
      <Heading size="2xl" color="canal.600" mb={4}>
        {chapter.emoji} {chapter.title}
      </Heading>
      <Text fontSize="lg" lineHeight="tall" mb={6} color="gray.800">
        {chapter.text}
      </Text>

      <VStack align="stretch" gap={3}>
        {chapter.clues.map((clue) => (
          <ClueSearch
            key={clue.id}
            clue={clue}
            found={collectedSet.has(clue.id)}
            onFind={onFindClue}
          />
        ))}
        {chapter.cipher && (
          <CipherPuzzle
            cipher={chapter.cipher}
            decoded={collectedSet.has(`chapter-${chapter.id}-cipher`) || cipherDecoded}
            onDecode={handleDecode}
          />
        )}
      </VStack>
    </Box>
  )
}

export default ChapterView
