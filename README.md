# Step & Repeat
Manages modern sneaker and footwear inventory, product descriptions, and pricing for online shoppers and footwear enthusiasts.

## Data model
| Field       | Type         | Notes                          |
|    ---      | ---          | ---                            |
| name        | text         | required, max 100 chars        |
| description | text         | product details, max 255 chars |
| price       | number       | positive value in RON          |
| category    | fixed values | Sport, Casual, Vara            |
| user        | relation     | the owner/admin of the item    |

Sample data used across all stages:
1. Pantofi sport, active, sport
2. Adidasi casual, active, casual
3. Sandale de vara, active, vara

## How to run
Open `index.html` in a browser. No build step, no server.

## AI usage
| Tool    | Used for                                                   |
| ---     | ---                                                        |
| Gemini  | Modern UI/UX design ideas and responsive CSS layout fixing.|

## Status
- [x] Stage 1: static mockup
□ Stage 2: data logic in JavaScript