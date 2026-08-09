export const chapters = [
  {
    id: 1,
    title: 'Chapter 1: The Missing Owner',
    emoji: '🥪',
    text: "Anne Lotus and Frank Holland were washing their whiskers when they smelled something wrong: lunch, half-made, and no owner in sight. The kitchen window was open, a chair was knocked sideways, and the house had gone very quiet. Anne and Frank looked at each other and knew — this called for detective work.",
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
    text: "Armed with the decoded location, Anne, Frank, and Detective Crumbsworth swam the canals, scurried across bridges, and slipped through a hidden grate into the tunnels beneath Hamsterdam. Deep underground, past hidden clues and detective maps covered in crumbs, they finally reached the old windmill's hidden base — and found their owner, safe, tied up with nothing scarier than a ribbon of stroopwafel wrapping.",
    clues: [
      {
        id: 'c3-1',
        title: 'A trail of stroopwafel crumbs',
        description: 'Leading straight down into the tunnels — someone has a sweet tooth, even in a hideout.',
        emoji: '🍪',
      },
      {
        id: 'c3-2',
        title: 'The owner, found safe',
        description: 'Rescued at last! Case closed, thanks to some very determined hamsters.',
        emoji: '🎉',
      },
    ],
  },
]

export const totalClueCount = chapters.reduce(
  (sum, chapter) => sum + chapter.clues.length + (chapter.cipher ? 1 : 0),
  0,
)
