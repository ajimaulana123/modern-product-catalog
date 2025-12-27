# **App Name**: LitFolio

## Core Features:

- Book Catalog Display: Display a list of books fetched from the provided API endpoint, showcasing title, description, category, price, discount, rating, stock and other details. Includes responsive card-based grid layout.
- Client-Side Search: Implement real-time filtering of books by title, description, or category, offering an intuitive search experience without page reloads. Optimized with useMemo.
- Custom Empty State: Display a custom EmptyState component when no books match the search criteria, providing a user-friendly message and visual cue.
- Loading State: Show a loading indicator while fetching data from the API to improve the user experience.

## Style Guidelines:

- Primary color: Soft blue (#90AFC5) to evoke a sense of calm and readability.
- Background color: Light gray (#F0F4F7) for a clean and unobtrusive backdrop.
- Accent color: Warm yellow (#D6C18B) for highlights and interactive elements to draw attention.
- Body text: 'Inter', a grotesque-style sans-serif for modern readability.
- Headline text: 'Space Grotesk' is chosen to pair with 'Inter,' suitable for headers to draw attention to titles and subtitles on the app.
- Simple, minimalist icons for categories and interactive elements.
- Card-based grid layout with responsive columns for different screen sizes: 3-4 columns on desktop, 2 on tablet, and 1 on mobile.
- Subtle hover animations on book cards for a visually engaging experience.