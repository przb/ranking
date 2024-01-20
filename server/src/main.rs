use std::sync::Arc;
use async_std::sync::RwLock;
use state::Repository;

mod item;
mod state;
mod callbacks;

#[async_std::main]
async fn main() -> tide::Result<()> {
    femme::start();


    let mut app = tide::new();

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
    app.listen("127.0.0.1:8080").await?;
    Ok(())
}
