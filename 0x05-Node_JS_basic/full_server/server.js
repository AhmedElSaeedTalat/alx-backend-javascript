import routes from './routes';

const express = require('express');

const app = express();
const PORT = 1245;

routes(app);
app.listen(PORT);
export default app;
