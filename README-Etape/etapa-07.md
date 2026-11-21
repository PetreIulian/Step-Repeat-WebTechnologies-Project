| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S7-R1 | controlled form: value + onChange on every field | TaskForm.jsx#L..-L.. | read |
| S7-R2 | empty title shows an error, nothing is sent | TaskForm.jsx#L.. (valideaza) | submit empty, watch Network |
| S7-R3 | added item shows in the list and survives refresh | App.jsx#L.. (handleAdd), api.js#L.. | add, refresh |
| S7-R4 | toggle and delete survive refresh | App.jsx#L..-L.. | toggle/delete, refresh |
| S7-R5 | button disabled while sending, form cleared only on success | TaskForm.jsx#L..-L.. | --delay 3000; stop API and submit |
| S7-R6 | tw.json and the data-testid attributes from table 7.3 | tw.json, TaskCard.jsx#L..-L.. | querySelectorAll in the console |
| S7-R7 | README Stage 7 section + AI log | README.md, ai-log/etapa-07.md | read |
| S7-R8 | commit "Stage 7" pushed | link to the commit | commit history |