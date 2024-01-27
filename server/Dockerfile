FROM rust:1.69 as server
LABEL authors="przb"

WORKDIR /usr/src/backend
EXPOSE 8080
COPY . .

RUN cargo build --release

CMD ["./target/release/server"]
