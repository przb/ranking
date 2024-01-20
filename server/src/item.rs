use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Item {
    pub id: i32,
    pub name: String,
    pub rank: i32,
}

impl Item {
    pub fn new(name: &str, rank: i32, id: i32) -> Self {
        Self { name: name.into(), rank, id }
    }
    pub fn from(new_item: NewItem, next_id: i32) -> Self {
        Self {
            name: new_item.name,
            rank: new_item.rank,
            id: next_id,
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct NewItem {
    pub name: String,
    pub rank: i32,
}

#[allow(dead_code)]
impl NewItem {
    pub fn new(name: &str, rank: i32) -> Self {
        Self { name: name.into(), rank }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ItemId {
    pub id: i32,
}

impl ItemId {
    pub fn new(id: i32) -> Self {
        Self { id }
    }
}

