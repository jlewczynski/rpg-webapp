export type Skills = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  will: number;
  charisma: number;
};

type AbilitySet = {
  [name: string]: keyof Skills;
};
export const AbilityList = {
  basic: {
    ['Charakteryzacja']: 'charisma',
    ['Dowodzenie']: 'charisma',
    ['Hazard']: 'intelligence',
    ['Jeździectwo']: 'dexterity',
    ['Opieka nad zwierzętami']: 'intelligence',
    ['Pływanie']: 'strength',
    ['Powożenie']: 'strength',
    ['Przeszukiwanie']: 'intelligence',
    ['Skradanie się']: 'dexterity',
    ['Spostrzegawczość']: 'intelligence',
    ['Sztuka przetrwania']: 'intelligence',
    ['Targowanie']: 'charisma',
    ['Ukrywanie się']: 'dexterity',
    ['Wioślarstwo']: 'strength',
    ['Wspinaczka']: 'strength',
    ['Wycena']: 'intelligence',
    ['Zastraszanie']: 'strength',
  } as AbilitySet,
  advanced: {
    ['Alchemia']: 'intelligence',
    ['Brzuchomówstwo']: 'charisma',
    ['Czytanie i pisanie']: 'intelligence',
    ['Czytanie z warg']: 'intelligence',
    ['Gadanina']: 'charisma',
    ['Hipnoza']: 'will',
    ['Leczenie']: 'intelligence',
    ['Nawigacja']: 'intelligence',
    ['Oswajanie']: 'charisma',
    ['Otwieranie zamków']: 'dexterity',
    ['Śledzenie']: 'dexterity',
    ['Torturowanie']: 'will',
    ['Tresura']: 'intelligence',
    ['Tropienie']: 'intelligence',
    ['Zastawianie pułapek']: 'intelligence',
    ['Zwinne palce']: 'dexterity',
    ['Żeglarstwo']: 'intelligence',
  } as AbilitySet,
};

export type Character = {
  id: number;
  name: string;
  race: string;
  description: string;
  level: number;
  xp: number;
  skills: Skills;
  armor?: {
    name: string;
    ac: number;
  };
  weapons?: {
    type: 'melee' | 'range';
    name: string;
    damage: 6 | 8 | 10 | 12;
  }[];
  hp: number;
  wounds?: {
    location: string;
    effect: number;
    aided: boolean;
  }[];
  criticals?: {
    description: string;
    effect: number;
    skill: keyof Skills;
  }[];
  abilities: {
    [key: string]: 'known' | 'master';
  };
  otherAbilities?: [string, keyof Skills, 'master'?][];
  cash: {
    crowns: number;
    shillings: number;
    pennies: number;
  };
  items: {
    quantity: number;
    name: string;
  }[];
};

export function getNegatives(character: Character, name: keyof Skills): number {
  return (character.criticals ?? []).reduce(
    (sum, crit) => (crit.skill === name ? sum + crit.effect : sum),
    0,
  );
}

export function getEffectiveSkill(
  character: Character,
  name: keyof Skills,
): number {
  const negs = getNegatives(character, name);
  return character.skills[name] - negs;
}

export function abbreviateSkill(name: keyof Skills): string {
  switch (name) {
    case 'strength':
      return 'Si';
    case 'dexterity':
      return 'Zr';
    case 'constitution':
      return 'Ko';
    case 'intelligence':
      return 'In';
    case 'will':
      return 'Wo';
    case 'charisma':
      return 'Ch';
  }
}
