# 77beats
![77beats.org](https://raw.githubusercontent.com/classicmatsuo/77beats/master/readme.png)

77beats is an Old Town School of Folk Music event across the city of Chicago. Through the use of Angular and Google Maps API, the two of them are tethered to convey the event's data and location.

## Getting started & Dev
1. git clone `https://github.com/classicmatsuo/77beats`

2. run `npm install` 

3. run `node index.js` to spin a server on localhost:5000

### Build
1. run `gulp cssMinify` 

2. run `gulp concat` next
  - index.html will have concatenated css and js file refs and those are located in the 'dist/lib' folder.
    uncomment googleMapsAPI link for production and comment out link for dev, at bottom of index.html
  
3. all other assets will be in `public/` folder
