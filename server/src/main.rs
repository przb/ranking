use std::sync::Arc;
use async_std::sync::RwLock;
use state::Repository;

mod item;
mod state;
mod callbacks;

#[async_std::main]
async fn main() -> tide::Result<()> {
    femme::start();

    let repository = Arc::new(RwLock::new(Repository::new()));

    let mut app = tide::with_state(repository);

    app.with(
        tide::log::LogMiddleware::new()
    );

    app.at("/item").post(callbacks::add_item);
    app.at("/items").get(callbacks::get_items);
    app.listen("127.0.0.1:8080").await?;
    Ok(())
}
