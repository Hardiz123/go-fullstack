FROM golang:1.22-alpine

WORKDIR /app

COPY . .
# go and install all dependencies
RUN go get -d -v ./...

RUN go build -o api .

EXPOSE 8000

CMD [ "./api" ]