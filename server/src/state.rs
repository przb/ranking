use std::sync::Arc;
use async_std::sync::RwLock;
use crate::item::Item;

pub struct Repository {
    pub(crate) items: Vec<Item>,
    pub(crate) next_id: i32,
}

impl Repository {
    pub fn new() -> Self {
        let items = vec![Item::new("Sydney", 1, 0), Item::new("Ames", 2, 1)];

        Self { items, next_id: 2 }
    }
}

pub type State = Arc<RwLock<Repository>>;
