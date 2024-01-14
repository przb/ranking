use tide::Request;
use crate::item::Item;
use crate::state::State;

pub async fn add_item(mut req: Request<State>) -> tide::Result {
    let item: Item = req.body_json().await?;
    let state = req.state();
    let mut repo = state.write().await;
    repo.items.push(item);
    Ok(tide::Response::new(tide::StatusCode::Ok))
}

pub async fn get_items(req: Request<State>) -> tide::Result<tide::Body> {
    let state = req.state();
    let repo = state.read().await;
    tide::Body::from_json(&repo.items)
}
