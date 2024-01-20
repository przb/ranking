use tide::http::mime;
use tide::{Request};
use crate::item::{Item, ItemId, NewItem};
use crate::state::State;

pub async fn add_item(mut req: Request<State>) -> tide::Result {
    let new_item: NewItem = req.body_json().await?;

    let state = req.state();
    let mut repo = state.write().await;

    let next_id = repo.next_id;
    let item = Item::from(new_item, next_id);
    let item_response_body = ItemId::new(next_id);

    repo.next_id += 1;

    // todo make insertion insert into correct position instead of sorting
    repo.items.push(item);
    repo.items.sort_by(|a,b|a.rank.cmp(&b.rank));

    println!("items: {:?}", repo.items);


    let res = tide::Response::builder(tide::StatusCode::Ok)
        .body(tide::Body::from_json(&item_response_body)?)
        .content_type(mime::JSON)
        .build();
    Ok(res)
}
pub async fn delete_item(mut req: Request<State>) -> tide::Result {
    let item_id: ItemId = req.body_json().await?;

    let state = req.state();
    let mut repo = state.write().await;

    // TODO for now this works since the client will only ever send valid requests,
    // but some error handling would be nice
    let index = repo.items.iter().position(|i| i.id == item_id.id).unwrap();
    repo.items.remove(index);

    Ok(tide::Response::new(tide::StatusCode::Ok))
}

pub async fn get_items(req: Request<State>) -> tide::Result<tide::Body> {
    let state = req.state();
    let repo = state.read().await;
    tide::Body::from_json(&repo.items)
}

