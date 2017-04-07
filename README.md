# 77beats
77beats dev pkg

git clone https://github.com/classicmatsuo/77beats

npm install

run 'node index.js' to spin a server on localhost port 5000

run 'gulp cssMinify' first

run 'gulp concat' next
  - index.html will have concatenated css and js file refs and those are located in the 'dist/lib' folder.
    uncomment googleMapsAPI link for production and comment out link for dev, at bottom of index.html
  
all other assets will be in public folder
