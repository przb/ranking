FROM rust:1.69 as server
LABEL authors="przb"

WORKDIR /usr/src/backend
COPY src /usr/src/backend/src
COPY Cargo.toml /usr/src/backend/Cargo.toml
RUN cargo build --release

CMD ["target/release/server"]
