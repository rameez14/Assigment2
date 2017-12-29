## Website Project – Portfolio website 

## Introduction 
This is a website directed towards myself mainly focussing on how I am, my skills, my education and a contact me form in which the user can fill in and I will receive a email automatically. Whilst the user is on the about me section of my website the user will be able to download my CV and read further on about my life. Whilst planning my website I drew a rough sketch of what my website will look like and, however later I changed my mind and drew another rough sketch on what my website should include, the drawing you can find below as a form of a screenshot. All the relevant folder you can find on my GitHub page.

## First designs
I started to design my website, but I wasn’t very happy about the design, layout, structure and the features of my website so therefore, I decided to start again, this time trying to make it responsive.

## About me page
Below is the first about me page which looks reasonable at the first glimpse, however it was complicated getting everything to reasonable scale and playing around with the padding and margin was long and the design was not pleasing to me. 

![aboutme1](https://user-images.githubusercontent.com/25589868/34320328-bc9f9a0c-e7ef-11e7-892c-9aa011798e6a.jpg)

 Figure 1 – About me page 

## Qualifications page 
Below is the qualifications page in which you can find about what I have done or what I am currently doing, this page was not responsive unlike the other pages as it contained a large table and I found it difficult to make it responsive, I made it partially responsive but not fully. Once again, the design was not appealing.

  ![myqualfications](https://user-images.githubusercontent.com/25589868/34320357-503cc2d0-e7f0-11e7-8c4d-8c194fdf67a0.jpg)

   Figure 2 – Qualification page 

## Skills page 
This skills page took forever to figure out how to do and once again like the Qualifications page it was partially responsive not fully. So therefore, I decided to change the website as it did not look very professional.

![skillspage1](https://user-images.githubusercontent.com/25589868/34320364-9bab5de4-e7f0-11e7-8663-ae351a0d7840.jpg)

Figure 3 – Skills page 

## New design and some prototypes

## Introduction
After deciding to scrap the idea of the initial website I began to think deeply of what design I should include in my website, I began to draw rough sketches of my website (Which can be found later in this readme file) and I though the best design for my website should be a single page app which is responsive via adding the breakpoints and media queries.

## Header
The header I have used in my website is a horizontal navigation bar with links to the pages, I have not yet made it smooth scroll as I am currently struggling with this. When resizing the page to a mobile view and the tablet view the navigation bar changes to a humburger navigation bar in which you click it will show the pages link. The navigation bar position is fixed and when you scroll down the navigation bar also is visible.    

![navigationbar](https://user-images.githubusercontent.com/25589868/34320401-7a04be46-e7f1-11e7-87f3-11b53f1020d5.jpg)


## About me page
This is the page where you get to know me, on this page you can click to download my CV and read about me life.


![aboutme2](https://user-images.githubusercontent.com/25589868/34320410-ba6f2462-e7f1-11e7-96a2-f45e5ee958df.jpg)

Figure 7 – About me page 2

## My skills page 
I decided to remove the table as it was initially in my previous website, the reason for this was that it did not look good and I found it difficult to make the table fully responsive. On this page you can find my skills and my education. Furthermore, I have also included an click to go back link (you can find this in all my sections of my website) which takes you back to the about me page.

![skillspage2](https://user-images.githubusercontent.com/25589868/34320416-f1365060-e7f1-11e7-8607-f053887fae04.jpg)

Figure 8 – My Skills page 2

## Contact me page 
I have created a simple contact me form in which the user will fill out and I will receive an email automatically by using the mailto action.

![contactme](https://user-images.githubusercontent.com/25589868/34320427-2fedede0-e7f2-11e7-8b2a-f3a2c42cf74b.jpg)

Figure 9 – Contact me page

## JavaScript that I have included within my website

The JavaScript that I have included within my website is placed all in one folder as requested by yourself. You can find all the relevant JavaScript files in the JavaScript folder on GitHub. 

## Live time 
On the top of my website you can find a clock, this clock displays the current time. This time displayed is simple but very effective at the same time. This is done by using JavaScript;  

![liveclock](https://user-images.githubusercontent.com/25589868/34320445-74bf9ae0-e7f2-11e7-9d1f-5626e5fa7416.jpg)


## Contact form with validation 
I have created a way to check if each filed within my contact form is filled out, if one tries to fill out the form without completing all the sections an alert message will show up saying that you need to fill out the sections that you have missed. 

## Quiz
I have created a JavaScript quiz about myself. This JavaScript quiz first sees the test status in which the user has a choice of choice A, choice B and choice C. Then the four questions are asked. After completing the quiz, you are displayed your result of how many question you got right. It will check the question length and it will also check if the questions answered are correct or not    

## Navigation 
To make the navigation bar responsive I added JavaScript to check get the element by id. 

## Google map API 
I have implemented Google Map API within my website, the JavaScript plays a major role as it allows me to display the location I want with a marker showing this. 

## API that I have used within my website 

I could not think of a good and reasonable API to use within my website, then I decided to use Google Map API. I did not want to do this at the start, but I couldn’t think of another API to use. Furthermore, I did not want to display my home address due to privacy concerns then I decided to show Big Ben in London, as London could be a potential place where I could work later in life. I have used JavaScript for the Google API as explained above.

![googlemapapi](https://user-images.githubusercontent.com/25589868/34320464-c0e849c6-e7f2-11e7-8490-08fe0522b68b.jpg)


## CSS animations that I have used within my website 

## My name jumping animation 

I have used a jumping animation by using the span element in the HTML and I have used keyframes in the CSS. I have used transform: transateY, playing around with the pixels and using varying percentages. 
## Red circle animation

I have used a red circle pulse animation in which I gave it a div class and then styled it using CSS
Thank you glowing animation 
I have used a ul and li element to contain the message displaying thank you. Once again, I have used keyframes to display the colour, text shadow and used varying percentages.
## Problems that I faced when I was creating the website

1.	The Google Map Api was showing in my local computer when I ran it however, when clicking on the GitHub page link the Google Map Api was not coming up. I revisited the code and realised that I was missing the sign &. Fania helped me to resolve this issue 
2.	The JavaScript was not initially showing up on the GitHub page link when I refreshed the page it suddenly showed 
3.	The navigation bar was originally responsive this tool me a bit of time to resolve however, it is now responsive as explained above
4.	The quiz is not validated as I am struggling with it however, I am in the process of making it validate 

## The testing I have conducted of my website

## Testing one
One user suggested to me that my contact form was too simple, and I would receive empty emails.

## Problem resolved one
I have made a responsive contact form with CSS styling. The contact form now looks professional and I have added validation by using JavaScript and now no one can submit a empty form and I won’t receive empty emails.

## Testing two
One user said that why does the navigation bar disappear?

## Problem resolved two
To make my website user friendly I decided to make the navigation bar at a fixed position so when you scroll down you can see the navigation bar where ever you are on the website and click on the relevant sections.

## Testing three
One user said to me that my CSS animations was not relevant, and I should not include them.

## Problem resolved three
I take this comment on board, the reason why I never decided to get rid of the CSS animations was purely because I could demonstrate my knowledge of using CSS animations for this assignment. 

## Testing four
One user said to me that my website should be able to translate in to other languages.

## Problem resolved four
I take this comment on board, I am currently trying to add this feature in my website, but it is proving difficult. If I have time and figure out how to add this feature I would add it.

## Things you must do before marking my website

Initially when you click on the GitHub page link, view my website, right click on inspect you may be prompted with a JavaScript error, you may not see the Google Map API and you may not see the quiz. You should refresh the page and you should see no JavaScript errors, you should see the Google Map Api and you should see the quiz upon refreshing the page. I do not know why it does this.


## References 

W3schools.com. (2017). How To Create a Contact Form with CSS. [online] Available at: https://www.w3schools.com/howto/howto_css_contact_form.asp [Accessed 28 Dec. 2017].

W3schools.com. (2017). How To Google Maps. [online] Available at: https://www.w3schools.com/howto/howto_google_maps.asp [Accessed 6 Dec. 2017].

W3schools.com. (2017). Tryit Editor v3.5. [online] Available at: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_mail [Accessed 28 Dec. 2017].

Translate.yandex.com. (2017). Widget for websites. [online] Available at: https://translate.yandex.com/developers/website-widget [Accessed 27 Dec. 2017].

Google Developers. (2017). Google Maps JavaScript API  |  Google Developers. [online] Available at: https://developers.google.com/maps/documentation/javascript/ [Accessed 6 Dec. 2017].

GitHub. (2017). DaveEveritt/css-smooth-scroll. [online] Available at: https://github.com/daveeveritt/css-smooth-scroll [Accessed 27 Dec. 2017].

GitHub. (2017). CTEC3905/08-lab-json-ajax. [online] Available at: https://github.com/CTEC3905/08-lab-json-ajax [Accessed 29 Dec. 2017].

GitHub. (2017). CTEC3905/08-lab-json-ajax. [online] Available at: https://github.com/CTEC3905/08-lab-json-ajax/tree/googlemaps [Accessed 6 Dec. 2017].

YouTube. (2017). Build An HTML5 Website With A Responsive Layout. [online] Available at: https://www.youtube.com/watch?v=Wm6CUkswsNw [Accessed 15 Dec. 2017].

YouTube. (2017). Basic Parallax Website With HTML & CSS. [online] Available at: https://www.youtube.com/watch?v=JttTcnidSdQ [Accessed 9 Dec. 2017].

CodePen. (2017). HTML5 and CSS3 Three Column Responsive Layout. [online] Available at: https://codepen.io/smashtheshell/pen/qOrrwV [Accessed 25 Dec. 2017].

YouTube. (2017). How to create responsive navigation bar and menus?. [online] Available at: https://www.youtube.com/watch?v=dhtEAhHgiok&t=850s [Accessed 22 Dec. 2017].

