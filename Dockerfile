FROM httpd:latest

# Optionally, copy your web files into the container (replace ./my-website with your web files' directory)
COPY ./dist /usr/local/apache2/htdocs/

# Expose port 80 to the outside world
EXPOSE 80