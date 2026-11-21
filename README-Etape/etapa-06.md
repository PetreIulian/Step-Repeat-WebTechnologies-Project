| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S6-R1 | npm run api starts, route shows JSON | package.json#L.., db.json | open localhost:3001/tasks |
| S6-R2 | data no longer in React code | App.jsx#L.. (useState([])) | read |
| S6-R3 | loading message while waiting | App.jsx#L.. | --delay 4000 |
| S6-R4 | error message when API is down | App.jsx#L..-L.. | stop npm run api, refresh |
| S6-R5 | fetch only in api.js, URL from env | api.js#L..-L.., .env.example | search for fetch |
| S6-R6 | README Stage 6 section + AI log | README.md, ai-log/etapa-06.md | read |
| S6-R7 | commit "Stage 6" pushed | link to the commit | commit history |