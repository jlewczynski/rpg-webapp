import { printAMessage } from "./routes/api";
import { blabber } from "shared/utils";
const port: number = 8080;

console.log(`Server will serve on port ${port}... when it's ready!`);
console.log('Some more info!');
console.log('Even moar info!');
printAMessage("File importing works!");
printAMessage(blabber(10));
