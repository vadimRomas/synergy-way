FROM python:3.9-alpine
MAINTAINER Romas Vadym

ENV PYTHONUNBUFFERED 1

RUN apk add --no-cache --virtual ..build-deps gcc musl-dev postgresql-dev


RUN mkdir /app
WORKDIR /app

RUN adduser -D user

USER user

ENV PATH="/home/user/.local/bin:${PATH}"
RUN python -m pip install --user pipenv

RUN /usr/local/bin/python -m pip install --upgrade pip

COPY ./djangoProject/Pipfile* /tmp/
RUN cd /tmp && pipenv lock --requirements > requirements.txt && pip install --user -r requirements.txt
