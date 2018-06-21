export class Animal{
    species: string;
    updateSpecies = (value: string): void => {
        this.species = value;
    }
}