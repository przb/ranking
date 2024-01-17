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
}