export interface SignData {
  word: string;
  description: string;
  handShape: string;
  movement: string;
  location: string;
  emoji: string;
  visualCue: string;
}

// Comprehensive ASL dictionary with common words and phrases
const ASL_DICTIONARY: Record<string, Omit<SignData, 'word'>> = {
  hello: {
    description: "Open hand waves in greeting motion",
    handShape: "Open hand, fingers extended",
    movement: "Wave back and forth near head",
    location: "Side of head/temple area",
    emoji: "👋",
    visualCue: "Wave your hand like saying hello"
  },
  goodbye: {
    description: "Open hand waves in farewell motion",
    handShape: "Open hand, fingers extended",
    movement: "Wave back and forth away from body",
    location: "In front of body, waist level",
    emoji: "👋",
    visualCue: "Wave goodbye with open palm"
  },
  bye: {
    description: "Open hand waves in farewell motion",
    handShape: "Open hand, fingers extended",
    movement: "Wave back and forth away from body",
    location: "In front of body, waist level",
    emoji: "👋",
    visualCue: "Wave goodbye with open palm"
  },
  please: {
    description: "Open hand moves in circular motion over chest",
    handShape: "Flat hand, palm down",
    movement: "Circular rubbing motion",
    location: "Center of chest",
    emoji: "🙏",
    visualCue: "Rub chest in circular motion"
  },
  "thank you": {
    description: "Fingers touch chin then move forward",
    handShape: "Flat hand, fingertips touch chin",
    movement: "Move hand forward from chin",
    location: "Chin to forward space",
    emoji: "🙏",
    visualCue: "Touch chin, then extend hand forward"
  },
  thanks: {
    description: "Fingers touch chin then move forward",
    handShape: "Flat hand, fingertips touch chin",
    movement: "Move hand forward from chin",
    location: "Chin to forward space",
    emoji: "🙏",
    visualCue: "Touch chin, then extend hand forward"
  },
  sorry: {
    description: "Fist rotates over heart in circular motion",
    handShape: "Closed fist, 'A' handshape",
    movement: "Circular motion over heart",
    location: "Center of chest/heart area",
    emoji: "😔",
    visualCue: "Circle fist over heart area"
  },
  help: {
    description: "One hand supports the other moving upward",
    handShape: "Flat hand under fist",
    movement: "Bottom hand lifts top hand up",
    location: "In front of body",
    emoji: "🤝",
    visualCue: "One hand lifts the other upward"
  },
  yes: {
    description: "Fist nods up and down like a head nod",
    handShape: "Closed fist, 'S' handshape",
    movement: "Nod up and down",
    location: "In front of body",
    emoji: "✅",
    visualCue: "Nod fist up and down"
  },
  no: {
    description: "Index and middle finger snap down to thumb",
    handShape: "Index and middle finger extended",
    movement: "Snap fingers down to thumb",
    location: "In front of body",
    emoji: "❌",
    visualCue: "Snap two fingers to thumb"
  },
  good: {
    description: "Fingertips touch chin then move to palm of other hand",
    handShape: "Flat hand, fingertips to chin",
    movement: "Move to palm of other hand",
    location: "Chin to palm level",
    emoji: "👍",
    visualCue: "Touch chin, then place on other palm"
  },
  bad: {
    description: "Fingertips touch chin then flip hand down",
    handShape: "Flat hand, fingertips to chin",
    movement: "Flip hand down and away",
    location: "Chin area",
    emoji: "👎",
    visualCue: "Touch chin, then flip hand down"
  },
  water: {
    description: "W handshape touches chin twice",
    handShape: "Three fingers up (W shape)",
    movement: "Tap chin twice",
    location: "Chin/mouth area",
    emoji: "💧",
    visualCue: "Make W shape and tap chin twice"
  },
  eat: {
    description: "Fingertips tap mouth repeatedly",
    handShape: "Fingertips together",
    movement: "Tap mouth several times",
    location: "Mouth area",
    emoji: "🍽️",
    visualCue: "Tap fingertips to mouth repeatedly"
  },
  drink: {
    description: "C handshape moves to mouth like drinking",
    handShape: "C handshape (curved fingers)",
    movement: "Bring to mouth like drinking",
    location: "Mouth area",
    emoji: "🥤",
    visualCue: "Make C shape and bring to mouth"
  },
  bathroom: {
    description: "T handshape shakes side to side",
    handShape: "T handshape (thumb between fingers)",
    movement: "Shake side to side",
    location: "In front of body",
    emoji: "🚻",
    visualCue: "Make T shape and shake sideways"
  },
  hospital: {
    description: "H handshape draws cross on upper arm",
    handShape: "H handshape (two fingers extended)",
    movement: "Draw cross/plus sign on arm",
    location: "Upper arm",
    emoji: "🏥",
    visualCue: "Draw cross on upper arm with H shape"
  },
  doctor: {
    description: "D handshape taps pulse point on wrist",
    handShape: "D handshape (index finger pointing)",
    movement: "Tap wrist pulse point",
    location: "Wrist area",
    emoji: "👨‍⚕️",
    visualCue: "Make D shape and tap wrist pulse"
  },
  nurse: {
    description: "N handshape taps pulse point on wrist",
    handShape: "N handshape (two fingers down)",
    movement: "Tap wrist pulse point",
    location: "Wrist area",
    emoji: "👩‍⚕️",
    visualCue: "Make N shape and tap wrist pulse"
  },
  pain: {
    description: "Index fingers point at each other and jab",
    handShape: "Index fingers extended",
    movement: "Jab toward each other repeatedly",
    location: "In front of body",
    emoji: "😣",
    visualCue: "Point index fingers at each other and jab"
  },
  hurt: {
    description: "Index fingers point at each other and jab",
    handShape: "Index fingers extended",
    movement: "Jab toward each other repeatedly",
    location: "In front of body",
    emoji: "🤕",
    visualCue: "Point index fingers at each other and jab"
  },
  appointment: {
    description: "A handshape moves in circle then lands on other hand",
    handShape: "A handshape (closed fist)",
    movement: "Circle then tap on other hand",
    location: "In front of body",
    emoji: "📅",
    visualCue: "Circle A shape then tap other hand"
  },
  today: {
    description: "Y handshapes move downward twice",
    handShape: "Y handshape (thumb and pinky out)",
    movement: "Move downward twice",
    location: "In front of body",
    emoji: "📅",
    visualCue: "Make Y shapes and drop twice"
  },
  tomorrow: {
    description: "A handshape at cheek moves forward",
    handShape: "A handshape (closed fist)",
    movement: "Move forward from cheek",
    location: "Cheek area",
    emoji: "➡️",
    visualCue: "A shape at cheek moves forward"
  },
  yesterday: {
    description: "A handshape at cheek moves backward",
    handShape: "A handshape (closed fist)",
    movement: "Move backward from cheek",
    location: "Cheek area",
    emoji: "⬅️",
    visualCue: "A shape at cheek moves backward"
  },
  time: {
    description: "Index finger taps on wrist (watch)",
    handShape: "Index finger extended",
    movement: "Tap wrist",
    location: "Wrist area",
    emoji: "⏰",
    visualCue: "Tap wrist like pointing to watch"
  },
  money: {
    description: "Flat hand taps palm of other hand",
    handShape: "Flat hand",
    movement: "Tap palm repeatedly",
    location: "Palm of other hand",
    emoji: "💰",
    visualCue: "Tap flat hand on other palm"
  },
  home: {
    description: "Flat hand moves from mouth to cheek",
    handShape: "Flat hand, fingertips together",
    movement: "Move from mouth to cheek",
    location: "Mouth to cheek area",
    emoji: "🏠",
    visualCue: "Move flat hand from mouth to cheek"
  },
  work: {
    description: "S handshapes tap wrists together",
    handShape: "S handshape (closed fist)",
    movement: "Tap wrists together",
    location: "Wrist area",
    emoji: "💼",
    visualCue: "Tap closed fists at wrists"
  },
  school: {
    description: "Flat hands clap together twice",
    handShape: "Flat hands",
    movement: "Clap together twice",
    location: "In front of body",
    emoji: "🏫",
    visualCue: "Clap flat hands twice"
  },
  family: {
    description: "F handshapes form circle in front of body",
    handShape: "F handshape (thumb and finger touch)",
    movement: "Form circle",
    location: "In front of body",
    emoji: "👨‍👩‍👧‍👦",
    visualCue: "Make F shapes in circular motion"
  },
  friend: {
    description: "Index fingers hook together then switch",
    handShape: "Index fingers extended",
    movement: "Hook together then switch positions",
    location: "In front of body",
    emoji: "👫",
    visualCue: "Hook index fingers then switch"
  },
  love: {
    description: "Crossed arms hug chest",
    handShape: "Closed fists cross arms",
    movement: "Hug chest",
    location: "Chest area",
    emoji: "❤️",
    visualCue: "Cross arms and hug chest"
  },
  happy: {
    description: "Flat hands brush up chest repeatedly",
    handShape: "Flat hands",
    movement: "Brush up chest",
    location: "Chest area",
    emoji: "😊",
    visualCue: "Brush hands up chest repeatedly"
  },
  sad: {
    description: "Hands move down in front of face",
    handShape: "Open hands",
    movement: "Move downward in front of face",
    location: "Face area",
    emoji: "😢",
    visualCue: "Move hands down in front of face"
  },
  i: {
    description: "Point to yourself with index finger",
    handShape: "Index finger extended",
    movement: "Point to chest",
    location: "Chest area",
    emoji: "👆",
    visualCue: "Point index finger to yourself"
  },
  you: {
    description: "Point forward with index finger",
    handShape: "Index finger extended",
    movement: "Point forward",
    location: "Forward direction",
    emoji: "👉",
    visualCue: "Point index finger forward"
  },
  we: {
    description: "Index finger moves from self to others in arc",
    handShape: "Index finger extended",
    movement: "Arc from self to others",
    location: "Chest to forward",
    emoji: "👥",
    visualCue: "Arc finger from self to others"
  },
  they: {
    description: "Index finger points to side then sweeps",
    handShape: "Index finger extended",
    movement: "Point and sweep sideways",
    location: "To the side",
    emoji: "👥",
    visualCue: "Point and sweep to the side"
  },
  want: {
    description: "Claw hands pull toward body",
    handShape: "Claw handshape (curved fingers)",
    movement: "Pull toward body",
    location: "In front of body",
    emoji: "🤲",
    visualCue: "Claw hands pull toward you"
  },
  need: {
    description: "Index finger moves down sharply",
    handShape: "Index finger extended",
    movement: "Sharp downward motion",
    location: "In front of body",
    emoji: "☝️",
    visualCue: "Index finger moves down sharply"
  },
  go: {
    description: "Index fingers point and move forward",
    handShape: "Index fingers extended",
    movement: "Move forward together",
    location: "In front of body",
    emoji: "➡️",
    visualCue: "Point both fingers forward and move"
  },
  come: {
    description: "Index fingers beckon toward body",
    handShape: "Index fingers extended",
    movement: "Beckon toward body",
    location: "In front of body",
    emoji: "👋",
    visualCue: "Beckon with index fingers"
  },
  stop: {
    description: "Flat hand chops down on other palm",
    handShape: "Flat hand, palm down",
    movement: "Chop down on other palm",
    location: "In front of body",
    emoji: "✋",
    visualCue: "Chop flat hand down on palm"
  },
  wait: {
    description: "Wiggle fingers with palms up",
    handShape: "Open hands, palms up",
    movement: "Wiggle fingers",
    location: "In front of body",
    emoji: "⏳",
    visualCue: "Wiggle fingers with palms up"
  }
};

// Function to clean and simplify text using basic NLP
export function processText(text: string): string {
  // Basic text cleaning and simplification
  let processed = text.toLowerCase().trim();
  
  // Remove common filler words and simplify contractions
  processed = processed
    .replace(/\b(um|uh|like|you know|well|so)\b/g, '')
    .replace(/\b(i'm|i am)\b/g, 'i')
    .replace(/\b(you're|you are)\b/g, 'you')
    .replace(/\b(we're|we are)\b/g, 'we')
    .replace(/\b(they're|they are)\b/g, 'they')
    .replace(/\b(it's|it is)\b/g, 'it')
    .replace(/\b(don't|do not)\b/g, 'no')
    .replace(/\b(won't|will not)\b/g, 'no')
    .replace(/\b(can't|cannot)\b/g, 'no')
    .replace(/\b(gonna|going to)\b/g, 'go')
    .replace(/\b(wanna|want to)\b/g, 'want')
    .replace(/\b(gotta|got to|have to)\b/g, 'need')
    .replace(/\s+/g, ' ') // Remove extra spaces
    .trim();
  
  return processed;
}

// Function to map text to sign language
export function textToSigns(text: string): SignData[] {
  const processedText = processText(text);
  const words = processedText.split(/\s+/).filter(word => word.length > 0);
  const signs: SignData[] = [];
  
  for (const word of words) {
    const cleanWord = word.replace(/[^\w\s]/g, '').toLowerCase();
    
    if (ASL_DICTIONARY[cleanWord]) {
      signs.push({
        word: cleanWord,
        ...ASL_DICTIONARY[cleanWord]
      });
    } else {
      // For unknown words, provide fingerspelling guidance
      signs.push({
        word: cleanWord,
        description: `Fingerspell each letter: ${cleanWord.split('').join('-').toUpperCase()}`,
        handShape: "Various handshapes for each letter",
        movement: "Form each letter shape in sequence",
        location: "In front of body, chest level",
        emoji: "✋",
        visualCue: "Spell out each letter with hand shapes"
      });
    }
  }
  
  return signs;
}

// Function to get available words in dictionary
export function getAvailableWords(): string[] {
  return Object.keys(ASL_DICTIONARY).sort();
}