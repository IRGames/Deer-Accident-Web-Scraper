# DeerWebScraper
HTML5 project to scrape deer data from local sheriff's reports

# Installation
The site is running on https://isaacraymond.github.io/Deer-Accident-Web-Scraper/

For your local machine, however:
Download the zip file and open main.html in a web browser.  

Create a .txt file with the addresses of the sheriff's reports you'd like to use from http://www.dailybulldog.com/.  An example of this file has been included under "Resources_1".

Load the .txt file deer file by using the first "Browse" button.  Once the loading is complete, click "Click to download deer data" and you will be prompted to load a .csv file of the deer accidents.

# Purpose
For downloading the number of deer accidents per certain day:
This version currently only extracts the number of deer accidents, as well as their date of occurence, from a sheriff's report on http://www.dailybulldog.com/
The "deer data file" mentioned in main.html should be a text file where each line is a new address (see Resources/Deer List.txt for an example)

Once you've identified the URLs you want to scan, choose the "Click to download deer data" button and the URLs will be scanned to identify deer accidents and their dates.  A CSV will then be offered for download.


For downloading temperature data per date from NOAA
Note:  The NOAA website is more efficient/more clear for downloading weather data.  This was made solely as a programming exercise

The "dates for weather" button needs to be a text file where each line is a new date.  See DatesList.txt for an example of the dates format.  As it takes a while to query the NOAA database, after loading your text file, click "Click this and wait..." then wait for 100% on the buttons.  Then click "Click to download temperature data"

