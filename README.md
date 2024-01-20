# Overview

## Desired Functionality

- Add Item
- Remove Item
- Change Rank of Item
- Data Persistence

## Routes

| Route                | Method | Request Body              | Response Body                           |
|----------------------|--------|---------------------------|-----------------------------------------|
| /api/v1/item         | Post   | {rank: num, name: string} | {id: number}                            |
| /api/v1/item         | Get    | {id: number}              | {rank: num, name: string, id: number}   |
| /api/v1/item         | Delete | {id: number}              | {}                                      |
| /api/v1/item/:itemid | Put    | {rank: num, name: string} | {}                                      |
| /api/v1/items        | Get    | {}                        | [{rank: num, name: string, id: number}] |

