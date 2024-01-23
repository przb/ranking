FROM ubuntu:latest
LABEL authors="przb"

WORKDIR /usr/src/backend
COPY src /usr/src/backend/src
COPY Cargo.toml /usr/src/backend/Cargo.toml
RUN cargo build --release