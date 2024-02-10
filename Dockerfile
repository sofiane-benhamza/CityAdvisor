#a random web server
FROM httpd:latest

# Copy City Advisor React production files into default serving dir for httpd
COPY ./dist /usr/local/apache2/htdocs/

# Expose port 80 to the outside world
EXPOSE 80
