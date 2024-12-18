import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';
import { Pokemon } from 'src/pokemon/pokemon.interface';

@Injectable()
export class PokemonsService {
    constructor(private readonly httpService: HttpService) {}
    url = 'https://pokeapi.co/api/v2/pokemon/';

    async getPokemonByName(name: string): Promise<Pokemon>{
        
        let pokemon = <Pokemon>{};

        const { status, data } = await lastValueFrom(this.httpService.get(this.url + name));

        console.log(data);

        if(status === 200){
            pokemon.height = data.height;
            pokemon.id = data.id
            pokemon.name = data.species.name
            pokemon.sprite = data.sprites.front_default;
            pokemon.weight = data.weight;
            pokemon.type = data.types;
        }

        console.log(pokemon);
        console.log(data.status);

        return pokemon;
    }


}
