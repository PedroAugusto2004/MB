# Muscles & Balance
#### Video Demo:  <URL HERE>
#### Description:
Muscles & Balance is a comprehensive platform designed to help individuals achieve their health and fitness goals through various personalized tools and expert resources. The site offers features like calorie and nutrition calculators, tailored workout recommendations, and a supplement quiz to help users find the best products for their needs. Additionally, it provides a wide range of articles covering essential topics such as nutrition, exercise routines, and supplementation, all aimed at guiding users on their wellness journey. Whether you're just starting out or fine-tuning your approach, Muscles & Balance supports you every step of the way—all for free.

The project consists of several components:

12 HTML files
1 node_module folder
In the CSS folder:

5 CSS files
In the JS folder:

5 JavaScript files
Another node_modules folder
1 package.json
1 package-lock.json
There’s also an images folder containing 10 folders and 10 images. Each folder within "images" is organized by categories like anatomy of muscles, and exercise lists for abs, back, biceps, chest, glutes, legs, shoulders, triceps, and supplements.

## HTML Pages Overview:
### index.html
This page serves as the homepage for the Muscles & Balance platform. It includes several key sections:

Head Section: Contains the title "Muscles & Balance," meta tags for character encoding, compatibility, and responsiveness, as well as links to external stylesheets like FontAwesome for icons, Bootstrap for responsive design, and custom CSS for additional styling.

Header Section: Features the site title, logo, and a responsive navigation menu linking to other sections of the site, such as Home, Nutrition, Workout, Supplements, and Contact Us. Social media links are also included.

Main Content: Introduces the project with a welcome message, a slideshow of related images, and a subscribe button. A sign-in button directs users to the sign-in page. The page also includes information cards about nutrition and muscle gain, and a final card displaying the Muscles & Balance brand with hover animation.

Footer: Contains links to scripts responsible for functions like scroll reveal and backend operations.

### nutrition.html
This page is dedicated to nutrition, highlighting its importance for health and fitness:

Main Content: Begins with an introduction to nutrition and includes an embedded video. It covers macronutrients, a calorie calculator, a meal planner, and a nutrition calculator to help users manage their dietary needs effectively. There are links to different diet plans, such as those for losing weight, gaining weight, or following a vegan diet.
### workout.html
This page focuses on various workouts, divided by muscle groups such as chest, back, shoulders, biceps, triceps, and legs:

Main Content: Each muscle group is discussed with relevant exercises and supporting images. There's also a workout quiz where users can select their fitness level, goal, and preferences to receive tailored workout plans.
### supplements.html
The supplements page provides detailed information on various types of supplements and their benefits:

Main Content: Includes an explanation of what supplements are, a slideshow of related images, and a breakdown of different types of supplements like vitamins, minerals, protein supplements, and herbal supplements. At the end, a supplement quiz allows users to get personalized recommendations based on their fitness goals and diet type.
### contact.html
This page is designed for users to get in touch with Muscles & Balance:

Main Content: Features a contact form where users can submit their name, email, and a message. It also includes social media links and a footer with copyright information.
### login.html
This page includes sign-in and sign-up functionalities, as well as a "Forgot Password" option:

Main Content: The page is visually engaging with a background video. The login box contains forms for signing in, signing up, and resetting passwords. There’s also a logged-in section that displays a logout button when the user is successfully signed in.
Diet-Specific Pages:
### carnivore.html
This page focuses on gaining muscle mass while following a carnivore diet:

Main Content: The article explains key aspects like prioritizing high-quality protein sources, consuming enough calories, and optimizing macronutrient ratios. The page includes images and lists recommended foods and supplements.
### gainW.html
This page provides guidance on gaining weight and building muscle mass:

Main Content: The article discusses balancing diet and exercise, with tips on how to achieve muscle gain. The page features a list of diet and exercise tips, an image with a caption, and a warning to consult a healthcare professional before starting any new fitness regimen.
### loseW.html
This page is dedicated to losing weight while building muscle:

Main Content: The article emphasizes maintaining a calorie deficit while ensuring sufficient protein intake, combining cardio with strength training, and staying consistent. The page includes a diet section, exercise tips, and a warning to consult a healthcare professional before beginning a new fitness regime.
### vegan.html
This page outlines how to build muscle on a vegan diet:

Main Content: It covers topics like prioritizing protein-rich foods, ensuring enough calorie intake, balancing macronutrients, meal planning around workouts, and smart supplementation. The page includes sections with specific advice and a warning to consult with a healthcare professional before starting a new diet or exercise program.

## CSS overview:

I selected this design to enhance user navigation and ensure clarity. The use of symbols, along with the primary colors white, black, and red highlights the content and captures attention effectively. I also chose vibrant, eye-catching images that align with the project's concept. These images not only grab the user's attention but also complement the design, enhancing the overall user experience by making the content more engaging and visually appealing.

### style.css
The style.css file is linked to both nutrition.html and workout.html and defines the overall structure, design, and interactive elements of these pages. It controls the styling and formatting of forms, button animations, video sizing, and alignment. Essentially, everything you see and interact with on the workout and nutrition pages is driven by the style.css file.
### home.css
home.css is linked to index.html and manages key features such as the styling of the subscription form, project presentation, a branded card showcasing Muscles & Balance (MB), a slideshow, and the layout of images.
### supplements.css
supplements.css is linked to supplements.html and functions similarly to style.css, but with a unique design for the forms and sections, giving it a distinct look tailored to the supplements section.
### contact.css
contact.css is linked to contact.html, much like style.css, but with a custom design specifically for the contact form to provide a unique user experience.
### login.css
login.css is linked to login.html and stands apart from the other stylesheets. Its structure and forms were designed with a strong focus on user experience. The background video was redesigned to fit the layout and ensure that the content is displayed effectively.

## JavaScript overview

The JavaScript files in this project add various interactive features to a fitness and website management system:

1. **script.js**: Manages fitness-related functionalities including a calories calculator that computes daily caloric needs based on user inputs and adjusts for weight goals, a workout plan generator offering customized exercise plans, and scroll animations using ScrollReveal. It also provides a "scroll to top" button for smooth navigation.

2. **main.js**: Enhances user experience by implementing a sticky page title, a slideshow with manual and automatic slide transitions, and a subscription button that handles email validation and redirection.

3. **meal.js**: Supports nutrition tracking by dynamically adding food items for nutritional analysis, sending data to the Nutritionix API, and displaying totals. It also handles form submissions and recipe filtering based on user input.

4. **supplements.js**: Features a supplement quiz to recommend products based on user goals and diet preferences and a tracker for logging supplement intake, displaying each entry in a history list.

5. **login.js**: Manages user authentication processes including sign-in, sign-up, and password reset. It controls form visibility, handles data submission via POST requests, and processes user interactions with appropriate alerts and redirections.

6. **server.js**: Sets up an Express server with SQLite for user authentication, including sign-up, sign-in, and password reset functionalities. It uses Sequelize for database management and bcrypt for password hashing, and serves static files while handling cross-origin requests.
