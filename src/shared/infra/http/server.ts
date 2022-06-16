import { app } from './app';
console.log(process.env);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));