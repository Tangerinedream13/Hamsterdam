export const chapters = [
  {
    id: 1,
    title: 'Chapter 1: The Missing Owner',
    emoji: '🥪',
    text: "The sandwich was still warm. The owner was not. Anne Lotus and Frank Holland froze mid whisker-wash — lunch sat half-made on the counter, the kitchen window hung wide open, and a chair lay knocked sideways on the floor. The house had gone very quiet, the kind of quiet that makes a hamster's nose twitch. Anne and Frank looked at each other and knew: something had happened here, and it was up to them to find out what.",
    clues: [
      {
        id: 'c1-1',
        title: 'A half-made sandwich',
        description: 'Abandoned mid-slice on the counter — whoever left was in a hurry, or didn\'t leave on their own.',
        emoji: '🥪',
      },
      {
        id: 'c1-2',
        title: 'A shaky note',
        description: '"BE BACK SOON" — scrawled in handwriting that doesn\'t match the owner\'s usual neat script at all.',
        emoji: '📝',
      },
    ],
  },
  {
    id: 2,
    title: 'Chapter 2: The Chase',
    emoji: '🕵️‍♂️',
    text: "Detective Crumbsworth arrived within the hour, whiskers twitching with purpose. Together they spotted a shifty figure darting across a canal bridge and gave chase — over cobblestones, past the tulip stalls, along the water's edge. The stranger got away, but not before dropping a crumpled paper covered in strange symbols.",
    clues: [
      {
        id: 'c2-1',
        title: 'A crumpled paper',
        description: 'Covered in strange symbols — clearly a coded message. Detective Crumbsworth says it needs decoding.',
        emoji: '📜',
      },
    ],
    cipher: {
      scrambled: 'GSV LOW DRMWNROO LM XZMZO HGIVVG',
      solved: 'THE OLD WINDMILL ON CANAL STREET',
      hint: 'Each letter is swapped with its opposite in the alphabet (A↔Z, B↔Y, C↔X...).',
    },
  },
  {
    id: 3,
    title: 'Chapter 3: Under the City',
    emoji: '🌉',
    text: "Armed with the decoded location, Anne, Frank, and Detective Crumbsworth swam the canals, scurried across bridges, and slipped through a hidden grate into the tunnels beneath Hamsterdam. They braced for the worst — ropes, villains, a daring rescue. Instead, they popped up through a hatch in the old windmill's floor and stopped dead: fairy lights, a hammock, a stack of postcards, and their owner, kicked back with sunglasses and a lemonade. There had been no kidnapping at all. It was a spontaneous weekend trip to a windmill turned holiday cottage, booked in such a rush that lunch got abandoned mid-slice and the note came out crooked. The 'shifty figure' from the chase? Just the neighbor, dashing over to grab the spare key and feed the fish. The coded paper? Directions to the cottage, scribbled in the neighbor's own silly handwriting game. Case closed — the owner was never missing. Just on vacation, and very surprised to see three hamsters pop up through the floorboards.",
    clues: [
      {
        id: 'c3-1',
        title: 'A trail of stroopwafel crumbs',
        description: 'Leading straight down into the tunnels — turns out the owner packed snacks for the trip.',
        emoji: '🍪',
      },
      {
        id: 'c3-2',
        title: 'The owner, on vacation',
        description: "Not missing. Not in danger. Just relaxing in a hammock — and stunned to see three hamster detectives climb out of the floor.",
        emoji: '🏖️',
      },
    ],
  },
]

export const totalClueCount = chapters.reduce(
  (sum, chapter) => sum + chapter.clues.length + (chapter.cipher ? 1 : 0),
  0,
)
