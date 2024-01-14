use std::sync::Arc;
use async_std::sync::RwLock;
use crate::item::Item;

pub struct Repository {
    pub(crate) items: Vec<Item>,
}

impl Repository {
    pub fn new() -> Self {
        let items = vec![Item::new("Sydney", 1), Item::new("Ames", 2)];

        Self { items }
    }
}

pub type State = Arc<RwLock<Repository>>;
