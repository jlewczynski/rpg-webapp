import { createCrud } from "./Crud";
import { Character } from 'shared/Character';

export default {
  character: createCrud<Character>('character'),
}