| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S8-R1 | header navigation changes page without reload | App.jsx, Layout.jsx#L..-L.. | click links, watch Network |
| S8-R2 | click on an item opens its detail page | TaskCard.jsx#L.., TaskDetaliuPage.jsx | click a title |
| S8-R3 | refresh on the detail URL works; missing id shows an error | TaskDetaliuPage.jsx#L..-L.. | refresh /tasks/1, open /tasks/999 |
| S8-R4 | unknown URL shows the app 404 page | App.jsx#L.. (path="*"), NotFoundPage.jsx | open /ceva |
| S8-R5 | each component has its .module.css; index.css only shared styles | src/components, src/pages, index.css | read |
| S8-R6 | data-testid attributes from tables 7.3 and 8.2; detail route /<resource>/:id | Layout.jsx, TaskCard.jsx, TaskDetaliuPage.jsx, NotFoundPage.jsx | querySelector in the console |
| S8-R7 | README Stage 8 section + AI log | README.md, ai-log/etapa-08.md | read |
| S8-R8 | commit "Stage 8" pushed | link to the commit | commit history |