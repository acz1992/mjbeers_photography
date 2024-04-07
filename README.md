## To do:

Testing

### Initial Dimensions for outter components

1. About Page

-   Mike Kelley one
    OR just three paragraphs left side, pic of mitch right

2. Animations

-   Photo Grid - maybe dissolve in effect
-   About and Contact Pahe
-   Page Transitions - Take from Blickfang

### PhotoGrid

-   Include Lightbox. Research it. Idea is user can click on one phot and it trigegrs an overlay (lightbox) with image title and description maybe.

### Future

-   Look at incorporating Sanity into it, so Mitch can upload photos when he wants

-   Any issues from Photo gallery overflow - use darkened overlay for each photo (like Instagram)

Tools

-   react-type-animation
-   react-responsive masonry

Features:

-   shuffleArray function - Photos render order randomised each time page reloads

Challenges:
clipping overflow on scale hover effect of image tiles

-   Since Image tile dimensions vary:

1. getUniqueDimensions function asynchronously retrieves the unique dimensions (width and height) of each image using the Image constructor and onload event handler.
2. The useEffect hook is used to call fetchDimensions function once after the component mounts, ensuring that the unique dimensions are fetched and set before rendering.
3. The component renders the images within a ResponsiveMasonry component, ensuring responsiveness, and calculates the aspect ratio of each image container based on its unique dimensions to maintain proper image rendering.
