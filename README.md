# The project is set up using create-next-app

## Getting Started

First,

npm install

then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# written assignments

## Task 3

I really like the look of the design, it was fun to create!

As a frontend developer there are some things i could give as feedback though:
- Since this is a design it's hard to see what every button and interaction should do, I think wireframes or adobexd click prototype would make this a lot clearer.
- Some icons were SVG and some were PNG, it would be easier to maintain 1 way of working (in my opinion).
- I struggled with the api not giving back the information needed to fully create te design (rating, genres).
All of these feedback points could also be solved by talking to one of the designers and clearing up the misconceptions.

On the otherhand i really liked how easy it was to determine the amount of pixels between items.
The same goes for the mobile design which was really easy to use as well.

## Bonus task Architecture

(i don't really know if i understood the question correctly)

I think to improve the current project i could make use of more Utils to make to project more modular.

The same thing could be done for The MovieOverview component. The MovieOverviewComponent could be changed in a regular overviewComponent where data is passed into. This would make the component more modular and more widely useable (where it currently is not).

Other than that there are multiple performance, best practices, accessibility, SEO and PWA changes that could be made according to the lighthouse tool in Google.

## Bonus Unit tests

For this project i did not create any test. The reason for this is both time and that i did not really know what to test. I have experimented with Jest testing but never have i done this in an actual production environment. Because of this i did not really know what in this code should be tested.

## Extra information

In this project i did not use any Typescript. I mainly decided to do this because i am currently a little more comfortable with React and because of this i am able to produce results quicker this way. Since i am still learning Typescript i thought it was better produce this project using React.
