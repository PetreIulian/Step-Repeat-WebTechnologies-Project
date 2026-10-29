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
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project

## Stage 2: data logic
Plain JavaScript, no DOM. `adidasi.js` holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.
## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Stage 4: components
The list is rendered from the data, through two components:
- `ProductList` receives the whole array and renders one card per item
- `ProductCard` receives a single item through props and displays it
- Implemented almost all jsx and css components
