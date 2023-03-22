#syntax=docker/dockerfile:1
FROM python:latest
ARG NPM_TOKEN  
WORKDIR /app
#to COPY the remote file at working directory in container
COPY . /app

# COPY requirements.txt requirements.txt
RUN apt-get update && apt-get install -y git
RUN pip3 install -r requirements.txt 

CMD python ./app.py