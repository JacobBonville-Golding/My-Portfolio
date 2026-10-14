# Animations and Accessibility

## 1. Animated gradient background

- A slow-moving gradient adds visual interest behind the portfolio content.
- A visible pause/play button works with a keyboard.
- The button has accessible labels and communicates its current state.
- Animation starts disabled when the user prefers reduced motion.
- The user’s selection is remembered between visits.
- Text remains on solid surfaces, so the moving colours do not affect readability or contrast.

## 2. Multilingual welcome message

- The welcome heading types and erases “Hello” in several languages.
- The sequence runs once instead of looping continuously.
- A keyboard-accessible **Skip greetings** button is available while it runs.
- Reduced-motion users receive a static “Hello.”
- Smaller screens also receive the static version.
- Screen readers receive one stable welcome message instead of every changing word.

## 3. Cat eye tracking

- The cats’ eyes follow the visitor’s pointer on the welcome slide.
- The effect is disabled for reduced-motion users, touch devices, smaller screens and short screens.
- When disabled or when the window loses focus, the eyes return to the centre.
- The cats and moving eyes are decorative and hidden from assistive technology.
- The animation does not block clicks or provide essential information.

## 4. Custom paw cursor

- A decorative cat paw follows the pointer and changes position based on clickable or unavailable elements.
- It is disabled for reduced-motion users, touch devices and compact screens.
- When disabled, the normal system cursor is restored.
- The custom cursor is ignored by screen readers and cannot intercept interaction.
- Keyboard users continue to receive the existing visible focus indicators.

## 5. Fading paw prints

- Clicking creates a temporary paw print that grows slightly and fades away.
- Each print disappears after 3.6 seconds instead of looping.
- Paw prints are disabled whenever the custom cursor is disabled.
- They are decorative, hidden from screen readers and do not affect page interaction.

## 6. Project-frame and sidebar depth

- Shadows, gradients and layered colours create the appearance of raised surfaces.
- These are static visual treatments rather than animations.
- They do not flash, move or respond unexpectedly.
- Text remains on contrast-controlled surfaces.
- Shadows are not used as the only way to identify controls, sections or focus states.

Overall, nonessential motion is decorative, removable and separated from important content. Reduced-motion preferences, keyboard controls, screen-reader text and solid content surfaces help keep the experience accessible.

[Return to the project README](../README.md)
