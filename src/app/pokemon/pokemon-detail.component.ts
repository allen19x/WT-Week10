import { Component, OnInit } from "@angular/core";


import { PokemonService } from "./pokemon.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ns-details",
    templateUrl: "./pokemon-detail.component.html"
})
export class PokemonDetailComponent implements OnInit {
    pokemon;
    name;

    constructor(private route: ActivatedRoute, private ps: PokemonService) { }

    ngOnInit(): void {
        this.name = this.route.snapshot.params.name;
        this.ps.getPokemon(this.name).subscribe(
            (response: any) => {
                this.pokemon = response;
            }
        )
    }
}
