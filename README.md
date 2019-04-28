# Audio-Collage
Audio Collage Project for 'INTM-SHU 120 Communications Lab'

**1.	Title** <br/>
Heartbeat

**2.	Subtitle** <br/>
A web-audio interface that allows users to virtually experience a day of firefighters and ultimately can appreciate them and their hard works

**3.	Project Description** <br/>
We created a 5-minute audio starting from siren at the fire station to moving, extinguishing fire, rescuing people, and coming back to the station. All these sounds are in first-person of a firefighter. We inserted heartbeat sound of the firefighter in the background and changed the speed of heartbeat as the story proceeds. We minimized the visual effect on the screen to help the users focus more on the audio. Heart signal on the screen changes the speed as his heart beats faster or slower throughout the story. And, at the end, we displayed several photos of firefighters to give final impression on the works and efforts of firefighters.

**4.	Conceptual Development** <br/>
We first decided to do a project with heartbeat sound. The very first idea was to make a short love story and use heartbeat to show the inner feelings of the characters when they are saying something different from what they actually feel or think. But, we thought heartbeat sound can deliver something more meaningful. At last, we came up with an idea of using heartbeat to appreciate firefighters who risk their own lives to save others’ lives from a catastrophic flame of fires.

We watched several documentaries on Youtube about a daily routine of firefighters in order to create a virtual audio space of what they hear when they are fighting against fire and rescuing people. Accordingly, we created a storyline and listed out necessary audio fragments needed for each scene.

**5.	Technical Development** <br/>
We divided the number of scenes and worked on creating the audio pieces individually using Audacity. Collected audio fragments are arranged in a way that can show the progress of story without storytelling. After finishing each audio pieces, we merged them all and put heartbeat signal on the background. The heart beating speeds up as the story reaches the climax and returns back to its normal speed at the end when the firefighter is done with his job and return to the fire station for rest.

Our website is very simple and straightforward. Starting page only has one button to start the audio. As the audio starts, the heart signal is shown and is animated to seem as if one’s heart is beating. Speed of the heartbeat changes as the story proceeds. When the audio finishes, a set of images are shown below the heart signal. Codes for heart signal animation and responsive image grid are referenced from Codepen and W3School. I modified the codes to change the speed of heart signal and display images one after another. 

**6.	Lesson Learned** <br/>
As any other web development tasks, this project could only be finished after countless trial and error, searching up on Google and trying out different functions and logic myself. Animations could be done through either CSS or Javascript, and figuring out the most effective method was challenging. Particularly, the fact that JS cannot be accessed in CSS put a limit in realizing it when it worked conceptually. In order to change the speed of the heart signal at specific periods, for instance, I thought of making the program recognize specific time in JS and use @keyframes animations in CSS, but soon realized that there is no way I can pass data from JS to CSS. I could make it work by using a function ‘setTimeout’ in JS and change the animation duration after a certain amount of time passed since the audio starts.

Another function I worked on for the website was displaying the photos one after another when the audio finishes. I started using for() loop to change the visibility and set time delay by using setTimeout function. I played with boolean variables.

**7. Attribution** <br/>
We collected all the audio fragment files from www.freesound.org. Screen display of heart signal is a modified version of codes uploaded on CodePen (https://codepen.io/jupa8712/pen/XmbyXE). Photos shown at the end are organized using a responsive image grid in w3schools.com (https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp). All the photos are from Google image search on ‘firefighters.’
