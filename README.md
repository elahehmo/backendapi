# APIs created for freeCodeCamp backend challenge

## Timestamp Microservice  

Made for FreeCodeCamp.com's API Development Projects
User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date.
User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.
User Story: If it does not contain a date or Unix timestamp, it returns null for those properties 
### example=http://localhost:3000/api/date/January 1, 2016

## Request Header Parser Microservice
 
This will return an object containing requester's IP / Language and Operating system.
The format is: { "ipaddress":req.ip, "language":lang, "software":software  } 
### example=http://localhost:3000/api/whoami


## URL Shortener Microservice
     
User Story: I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
User Story: If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
User Story: When I visit that shortened URL, it will redirect me to my original link 
### example=http://localhost:3000/api/urlshort/freecodecamp.com using goo.gl api
### example=http://localhost:3000/api/url/freecodecamp.com using local mongodb
         
## Image Search Abstraction Layer
    
User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL. 
User Story: I can get a list of the most recently submitted search strings. 
### example=http://localhost:3000/api/image/imagesearch/lolcats%20funny?offset=5
###  example=http://localhost:3000/api/image/latestsearch
         
         

