use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Item {
    pub name: String,
    pub rank: i32,
}

impl Item {
    pub fn new(name: &str, rank: i32) -> Self {
        Self { name: name.into(), rank }
    }
}