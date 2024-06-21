<----- Create Docker Image ------------------------------------------------------->

npm run build
docker build -t developer-portfolio .

<----- Docker Image Testing ------------------------------------------------------>
docker run -p 3000:3000 developer-portfolio

