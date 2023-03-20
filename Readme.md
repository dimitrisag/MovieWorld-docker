Here is a quick quide on how to run the application (windows environment)
- Install docker desktop on your machine
- You have to add on your hosts file the specific domains: movie.local (point on localhost)
- Run the command on the root of the project `docker-compose up -d --build`
- you are now able to reach the application on https://movie.local/dashboard

This is a quick and easy way to run the application without installing php, node, composer or other dependences. The only thing you need is Docker Desktop and a tweak on your hosts file. Of course, if you want to see the source code of the project you can check this repo: https://github.com/dimitrisag/movie-world.git

The project is built on Laravel 10 framework bundled with Vuejs for frontend and an sqlite database. I have to note that I used the breeze scaffolding for login and registration.

I am strongly recomending fully decoupled architecture (separated backend from frontend) but unfortunatelly the time is too short and it needs some efford to implement it on a test project. 

I hope you enjoy reading my project :)

At your disposal,

Dimitris Angelis
