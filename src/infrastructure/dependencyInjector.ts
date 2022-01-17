import { Container } from "typedi";
import LoggerInstance from "./logger";

export default () =>{
    Container.set('Logger',LoggerInstance)
}
