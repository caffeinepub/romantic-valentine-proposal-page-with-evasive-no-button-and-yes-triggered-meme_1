# Specification

## Summary
**Goal:** Create a single-page, romantic Valentine proposal prompt with “Yes”/“No” buttons where “No” evasively moves away (including on iPad touch) and “Yes” reveals a meme success state.

**Planned changes:**
- Build a responsive single-page layout themed in pink and white with polished typography and touch-friendly button sizing.
- Display the Valentine question with two buttons labeled exactly “Yes” and “No” (English-only UI text).
- Implement evasive behavior for the “No” button on hover and touch/pointer interactions, repositioning it within bounds so it stays visible and avoids overlapping “Yes”.
- Implement a “Yes” success state that replaces/overlays the prompt and shows a meme image plus the exact caption “Good choice”, removing/disable the “No” option.
- Add the required generated meme image as a static asset under `frontend/public/assets/generated` and load it directly from the frontend.

**User-visible outcome:** The user sees a romantic Valentine prompt with “Yes” and an evasive “No”; tapping/clicking “Yes” transitions to a success view showing a “Good choice” meme image.
