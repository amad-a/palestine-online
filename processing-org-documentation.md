# Palestine Online Processing Org Fellowship

## Background
The first version of palestineonline.net was built in a weekend and launched in November 2023, as a simple container to hold the websites I showed as the first "exhibition" of the project at Pioneer Works in Brooklyn, as a tabler for School For Poetic Computation's Software For Artists Day. The original installation consisted of a linux laptop connected to a CRT monitor and a mouse. Through screen mirroring, I showcased a number of scraped websites stitched together with a rudimentary landing page, providing guidance across the table. 

I revisited(?) Palestine Online in January of 2024, after being invited by Todd Anderson to give a talk on the project for Wordhack at Wonderville. I used the talk as an opportunity to research and compile more websites, as well as to build out a more fleshed out version of the website, with some added features such as loading a random site, site info notes, and linking pages to their original wayback machine links (Though in the process of this update, I abandoned the primitive mobile responsiveness of the original).

This updated web version was developed alongside a custom version of Palestine Online created for an exhbition by studio salasil entitled Crystal Clear, shown at Bayt Al Mamzar in Dubai, which revisited the project as a full screen installation (though this time unsupervised). I continued finding and collecting new websites for workshops and lectures, though did not make any ugprades to the UI.

## Fellowship plan
I applied to the Processing Foundation's Annual Fellowship with Palestine Online, in hopes of getting support for the continual development and expansion of the project. Since this was already an exisiting project, my proposal consisted of improvements and laying more foundation to encourage the future of the archive, compiled from my observations of its needs from my experience:
- UI interface updates to support a variety of contexts on the site (installation and mobile version)
- More efficient and methodical scraping of Wayback Machine websites
- Further exploration of Palestine Online in educational and arts programming

I was lucky enough to be paired with designer and artist Zainab Aliyu as my mentor for the fellowship, who brought with her expertise in reimagining expansive archives of the global south, which maintain reverence for their source materials while also creatively reconfiguring the bounds and presentation of the web browser. 

## First Steps/Bookkeeping
After meeting with Zainab for the first time and presenting my hodge podge of ideas, we decided to compile all of Palestine Online's website info onto a spreadsheet, to have a better sense of how to organize the websites and also keep track of what steps need to be taken to gradually expand the archive's roster.

## Changes to current UI
Palestine Online's previous version was organized in a singular, thematic structure taken from the Lecture/Walkthrough format it was adapted from - a table of contents on the front page, and two green arrows on both sides of the window to go between the websites in the table's order. Getting Zai's perspective, this layout was easily overlooked, confusingly redundant, and too similar to the "Global" navigation green buttons, so we decided a replacement for site navigation was a good first step. Exploring different options including a sidebar, I decided that a dropdown menu on the top nav would be the best, resembling a URL bar which users can easily identify as a global point of navigation. Opening this "URL bar" reveals sites nested in categories across multiple themes, which are more flexible than the orignal rigid linear table of contents. I also revamped the configuration of this menu from a solely linear array of objects to this array and a companion nested "category" object, to allow easy changes.

Also reconfigured 
Some other additions include navigation breadcrumbs, but this idea still needs to be fleshed out more

## Full Screen Mode
For Crystal Clear, I built an instance of Palestine Online from the ground up, meant to be displayed for full screen presentation on a period correct, lower resolution display for immersion. I took note of the importance of a solution for easier public installation that is not (physical, not web) site-specific, and for the fellowship, decided to experiment with implementing this display mode right in the main project, especially now that all site navigation was contained within the window. This was as simple as making the window full screen when the breakpoint matches a ~4:3 aspect ratio at ~1024x768. 

## Mobile Version


- Spreadsheet - keeping a public record for easier collaboration, tracking
- UI Updates
    - With Zai, continuing developing a design language that appropriates (hijacks as in Détournement?) "windows classic" UI thru 98.css library
        - icons, address bar, bottom breadcrumbs, share
- Full screen mode
    - allow immersive simulation for installation
- Mobile Version/Responsive
    - Update nav for dynamic sharing, etc.
    - mobile version: reimagining an alternate mobile browser UI
        - zoom in place of pinch to zoom
- Scraping from the Wayback Machine
    - many websites linked thru iframe but some are downloaded 
    - Used existing, deprecated or outdated libraries with varying levels of success
    - also downloaded pages from chrome and disabled links (last ditch effort for showing specific pages quick and dirty
    - Needed to explore options to scrape efficiently and quicky
    - Especially with the outtage of wayback machine 
- Using Palestine Online as an education tool
    - Workshop with children teenagers (ask gufran for kid's names and ages)
    - Went with a blank state, wanted to introduce children to the project and locate what drew children and teens about the project 
    - 
    - turnout of 2-6 per session, different ages and interests
    - Asked them about social media and Palestine on the internet 
        - ended up talking about history, parents, access, questions about the code behind the project and how to use wayback machine
    - some students who had coding experience, talked about iframes, how the web works, web hosting
    - had them dig thru sites themselves and collected webpages to add to website
    - Though loose in structure, the workshops showed potential in palestine online as a tool to aid in education in varying domains, internet and computer history, digital literature


