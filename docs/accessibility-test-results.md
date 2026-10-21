# Accessibility Test Results

Manual accessibility testing was completed on October 21, 2026, using the local production build of the portfolio on Windows.

## Test environment

- Platform: Windows
- Build: Vite production build served locally with `npm run preview`
- Screen reader: NVDA (version not recorded)
- Browser: Chromium-based browser (version not recorded)

## Results

| Test | Result | Notes |
| --- | --- | --- |
| Keyboard navigation | Pass | All interactive controls could be reached and operated in a logical order. |
| NVDA reading order | Pass | Slide content was announced in a clear and logical reading order. |
| Slide announcements | Pass | Changing slides announced the new slide heading. |
| Image descriptions | Pass | Meaningful images had useful descriptions and decorative images were ignored. |
| Dark contrast theme | Pass | Content remained visible and readable. |
| Light contrast theme | Pass | Content remained visible and readable. |
| 200–400% zoom | Pass | Content remained readable and available through scrolling without being lost. |
| Reduced motion | Pass | All decorative animations were disabled by default when reduced motion was enabled. |

## Summary

The tested portfolio content remained understandable and operable with keyboard navigation, NVDA, Windows contrast themes, browser zoom and reduced-motion preferences. These results document a practical manual accessibility review; they are not a formal WCAG certification.

[Return to the project README](../README.md)
