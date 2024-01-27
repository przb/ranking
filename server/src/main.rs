use std::sync::Arc;
use async_std::sync::RwLock;
use itertools::{all, Itertools};
use tide::http::headers::HeaderValue;
use tide::security::{CorsMiddleware, Origin};
use state::Repository;

mod item;
mod state;
mod callbacks;

#[async_std::main]
async fn main() -> tide::Result<()> {
    femme::start();

    let methods = vec!["http", "https"];
    let destinations = vec!["localhost", "ranking-server", "ranking-client"];
    let ports = vec!["8080", "3000"];
    let all_origins = methods.into_iter()
        .cartesian_product(destinations)
        .cartesian_product(ports)
        .map(|((method, host), port)| format!("{method}://{host}:{port}"))
        .collect_vec();

    let cors = CorsMiddleware::new()
        // .allow_credentials(false)
        .allow_methods("*".parse::<HeaderValue>().unwrap())
        // .allow_origin(Origin::from("*"));
        .allow_origin(Origin::from(all_origins));


    let mut app = tide::new();
    app.with(cors);

    app.with(
        tide::log::LogMiddleware::new()
    );
    app.at("/api/v1").nest({
        let repository = Arc::new(RwLock::new(Repository::new()));

        let mut api = tide::with_state(repository);

        api.at("/item")
            .post(callbacks::add_item)
            .delete(callbacks::delete_item);
        api.at("/items").get(callbacks::get_items);
        api
    });
    app.listen("0.0.0.0:8080").await?;
    Ok(())
}
