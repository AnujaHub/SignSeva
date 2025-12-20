# Flashcard Images

This directory contains the sign language images for the flashcard functionality.

## Current Dataset Structure

### Alphabet Images (A-Z) ✅ COMPLETED
Your ISL dataset has been successfully integrated! The structure is:
- `a/A1.jpg`, `a/A2.jpg`, ... `a/A486.jpg` - Sign variations for letter A
- `b/B1.jpg`, `b/B2.jpg`, ... `b/B486.jpg` - Sign variations for letter B
- `c/C1.jpg`, `c/C2.jpg`, ... `c/C486.jpg` - Sign variations for letter C
- ... and so on through `z/Z1.jpg` to `z/Z486.jpg`

**The flashcard system uses the first image of each letter (A1.jpg, B1.jpg, etc.)**

### Number Images (0-9) ⚠️ NEEDED
Currently using placeholder images. To add number images:
1. Create folders: `0/`, `1/`, `2/`, ..., `9/`
2. Add images with naming: `0/01.jpg`, `1/11.jpg`, `2/21.jpg`, etc.
3. Update `src/data/numbers.js` to use the correct paths

## Image Specifications
- Format: JPG (as in your dataset)
- Size: Your images are already properly sized
- Shows clear hand gestures for each letter
- Good contrast and visibility

## How It Works
- **Alphabets**: Uses `/assets/a/A1.jpg`, `/assets/b/B1.jpg`, etc.
- **Numbers**: Currently uses placeholder (you can add real number images later)
- The flashcard system automatically loads the correct images

## Current Structure
```
public/
  assets/
    a/          # Letter A images (A1.jpg to A486.jpg)
    b/          # Letter B images (B1.jpg to B486.jpg)
    c/          # Letter C images (C1.jpg to C486.jpg)
    ...
    z/          # Letter Z images (Z1.jpg to Z486.jpg)
    README.md   # This file
```

## Next Steps
1. ✅ Alphabet flashcards are ready to use!
2. ⚠️ Add number images if you want number flashcards
3. 🚀 Test the application by running `npm start`
