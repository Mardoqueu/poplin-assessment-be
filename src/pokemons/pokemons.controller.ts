import { Controller, Get, Param } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { Pokemon } from 'src/pokemon/pokemon.interface';

@Controller('pokemons')
export class PokemonsController {
    constructor(private readonly pokemonsService: PokemonsService) {}

    @Get(':name')
    getPokemonByName(@Param('name') name: string){        
        return this.pokemonsService.getPokemonByName(name);
    }
}
