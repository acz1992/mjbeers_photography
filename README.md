# MJBeers Photography Portfolio

## About

### Description

Mitch is a skilled, self-taught photographer who, alongside his day job, extends his photographical services to events and personalized photoshoots, as well as selling prints of his work.

### The Mission

The client needed a minimalist-style website where he could showcase his work and give an overview of his background and artistic journey - offering a brief yet engaging overview of his background and evolution as a photographer. Furthermore, potential customers needed a customers by which they could reach out and make inquiries.

## Tech / Resources

### Stack

This company website project uses React, TypeScript, and Vite to enhance development efficiency, ensure code reliability with strong typing, and optimize performance for a seamless user experience.

### Resources

-   **React-Icons**: Enhances user interface design by providing a wide range of customizable icons for React applications.

-   **Framer Motion**: Elevates user experience with fluid animations and interactive elements, simplifying complex motion design for React projects.

-   **React Router Dom**: Enables seamless navigation and routing within React applications, facilitating the creation of multi-page web experiences.

-   **React Type Animations**: Adds engaging typewriter-style animations to text elements, enhancing the visual appeal and interactivity of web interfaces.

-   **React Responsive Masonry**: Enables the creation of responsive grid layouts (like Pinterest) for presenting content, ensuring optimal display across various screen sizes and devices.

-   **React Lazy Load**: Allows components or images to be loaded lazily, meaning they are only rendered when they enter the viewport, enhancing performance by reducing initial page load times.

## Future

### To do

-   **Email.js**: Hook up form to email
-   **Testimonials**: Add a review page using reviews from Facebook
-   **Content Management System**: Integrate project with Sanity.io so client can upload pictures when needed
-   **Add Dark Mode**: Add toggle component that switches Website to darker colours, for environemntal purposes.

## Challenges

### **Clipping Image-overflow on hover scale-effect**:

Image tile dimensions vary, and so this could not be applied

**Solution**:

-   getUniqueDimensions function asynchronously retrieves the unique dimensions (width and height) of each image using the Image constructor and onload event handler
-   The useEffect hook is used to call fetchDimensions function once after the component mounts, ensuring that the unique dimensions are fetched and set before rendering.
-   The component renders the images within a ResponsiveMasonry component, ensuring responsiveness, and calculates the aspect ratio of each image container based on its unique dimensions to maintain proper image rendering.

### **Unequal spacing at the bottom of Photo Gallery**:

The column format of the Photo Gallery and randomization of the photo array meant that sometimes, very unequal spacing was rendered at the bottom of the component

**Solution**:

-   Apply the `vertical-align: bottom` CSS class to each image, in order to set the vertical alignment of each image, and produce more even distribution
