FROM rust:latest as build-server

WORKDIR /usr/src/backend
COPY . .
RUN cd backend && cargo build --release

