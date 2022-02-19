import { Router } from "express";
import { Character } from 'shared/Character';
import { json } from "body-parser";

const characterRouter = Router();

const testCharacter: Character = {
  id: 0,
  name: 'Jakob Magnus',
    race: 'człowiek',
    description: 'Inkwizytor z przypadku',
    level: 3,
    xp: 2,
    skills: {
      strength: 3,
      dexterity: 1,
      constitution: 3,
      intelligence: 5,
      will: 4,
      charisma: 3,
    },
    armor: {
      name: 'Brygantyna',
      ac: 2,
    },
    weapons: [
      { type: 'melee', name: 'Miecz', damage: 8 },
      { type: 'range', name: 'Łuk', damage: 8 },
    ],
    hp: 10,
    wounds: [
      { location: 'Korpus', effect: 3, aided: false },
      { location: 'Korpus', effect: 2, aided: true },
    ],
    criticals: [{ description: 'Brak oka', effect: 1, skill: 'intelligence' }],
    abilities: {
      ['Czytanie i pisanie']: 'master',
      ['Leczenie']: 'known',
      ['Skradanie się']: 'known',
      ['Zastraszanie']: 'master',
    },
    otherAbilities: [['Gra na kobzie', 'will', 'master']],
    cash: {
      crowns: 1,
      shillings: 15,
      pennies: 23,
    },
    items: [
      { quantity: 3, name: 'Pochodnia' },
      { quantity: 7, name: 'Racje podróżne' },
      { quantity: 1, name: 'Kołek' },
    ],
};

let characters: Character[] = [
  { ...testCharacter, id: 1 },
  { ...testCharacter, id: 2 },
]

characterRouter.get('/', (req, res) => {
  res.json(characters);
});
characterRouter.get('/:id(\\d+)', (req, res) => {
  const character = characters.find(c => c.id === Number(req.params.id));
  if (character) {
    res.json(character);
  } else {
    res.sendStatus(404);
  }
});
characterRouter.post('/', json(), (req, res) => {
  const newId = characters.reduce((maxId, c) => Math.max(maxId, c.id), 0) + 1;
  characters.push({ ...(req.body as Character), id: newId });
  res.json({ id: newId });
});
characterRouter.put('/', json(), (req, res) => {
  const value = req.body as Character;
  const index = characters.findIndex(c => c.id === value.id);
  if (index > -1) {
    characters[index] = value;
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});
characterRouter.delete('/:id(\\d+)', (req, res) => {
  const id = Number(req.params.id);
  const index = characters.findIndex(c => c.id === id);
  if (index > -1) {
    characters = characters.filter(c => c.id !== id);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

export default characterRouter;