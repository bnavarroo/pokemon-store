import RockLogo from '~/_assets/img/rock-logo.png';
import FireLogo from '~/_assets/img/fire-logo.png';
import WaterLogo from '~/_assets/img/water-logo.png';

export const STORES = [
  {
    name: 'Rock Store',
    type: 'rock',
    typeId: 6,
    description: 'Pokémons do tipo Rock (Pedra)',
    logo: RockLogo,
    default: true,
  },
  {
    name: 'Fire Store',
    type: 'fire',
    typeId: 10,
    description: 'Pokémons do tipo Fire (Fogo)',
    logo: FireLogo,
    default: false,
  },
  {
    name: 'Water Store',
    type: 'water',
    typeId: 11,
    description: 'Pokémons do tipo Water (Água)',
    logo: WaterLogo,
    default: false,
  },
];

export const STORE_ATTR_REF = 'typeId';
