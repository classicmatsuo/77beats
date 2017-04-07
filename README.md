# 77beats

77beats dev pkg

## Getting started & Dev
1. git clone https://github.com/classicmatsuo/77beats

2. run 'npm install' 

3. run 'node index.js' to spin a server on localhost:5000

### Build
1. run 'gulp cssMinify' 

2. run 'gulp concat' next
  - index.html will have concatenated css and js file refs and those are located in the 'dist/lib' folder.
    uncomment googleMapsAPI link for production and comment out link for dev, at bottom of index.html
  
3. all other assets will be in public folder
