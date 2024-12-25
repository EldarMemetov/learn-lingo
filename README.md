# Online Language Tutors

## Project Description

This project is a web application for a company offering online language tutoring services. Users can register, log in, browse tutors, add them to favorites, and book trial lessons. The app also includes a tutor filtering system by language, skill level, and hourly rate.

### Key Features:

- **Firebase Authentication:** User registration and login using Firebase Authentication.
- **Browse Tutors:** Users can browse tutor profiles and filter them by language, skill level, and hourly rate.
- **Favorites:** Logged-in users can add tutors to their favorites and have them saved even after refreshing the page.
- **Detailed Tutor Info:** Each tutor's profile includes detailed information, reviews, and ratings.
- **Modal Windows:** Used for registration, login, and booking trial lessons with form validation.
- **Animations:** Elements of the page appear with smooth animations.

## Technologies

- **React** — for building the user interface.
- **Firebase** — for user authentication and working with the database.
- **React Router** — for routing.
- **React Hook Form & Yup** — for form validation.
- **CSS Modules** — for modular component styling.
- **Vite** — for project bundling and development.
- **Firebase Realtime Database** — for storing tutor and user information.

## Tasks and Functionality

1. **Firebase Authentication:**
   - Registration, login, and logout functionality using Firebase.
   - User data stored in Firebase Realtime Database.
2. **Registration and Login Forms:**

   - Forms are validated using **react-hook-form** and **Yup**.
   - Modal windows close when clicking the close button, backdrop, or pressing the Esc key.

3. **Tutor Database:**

   - Tutors are stored in Firebase Realtime Database with fields like name, surname, languages, levels, rating, reviews, price per hour, lessons done, avatar URL, lesson info, conditions, and experience.

4. **Viewing Tutors:**

   - The Tutors page displays tutor profiles with brief information.
   - Users can filter tutors by language, level, and hourly rate.
   - "Load More" button for fetching additional tutor profiles.

5. **Favorites:**

   - Logged-in users can add tutors to their favorites list.
   - The state of favorites is preserved even after page reloads.

6. **Detailed Tutor Information:**

   - Clicking the "Read More" button reveals detailed tutor information, including reviews.

7. **Booking Trial Lessons:**
   - Clicking the "Book trial lesson" button opens a modal window with a form to book a trial lesson.
