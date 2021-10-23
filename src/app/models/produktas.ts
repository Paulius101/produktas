export class Produktas {
  public pavadinimas: string;
  public kaina: number
  public image : String
  public kiekis: number;
  public nuolaida: number;
  public akcijos: string[] = ["AKCIJA!!!", "AKCIJA!!!", "AKCIJA!!!"];

  public constructor(pavadinimas: string, image: string, kiekis: number, kaina: number, nuolaida: number) {
    this.pavadinimas = pavadinimas;
    this.image = image;
    this.kiekis = kiekis;
    this.kaina = kaina;
    this.nuolaida = nuolaida;
  }



  public padidintiKieki(): void {
    this.kiekis++
  }

  public sumazintiKieki(): void {
    this.kiekis--
  }

  public suteiktiNuolaida(): number {

    return this.kaina * this.nuolaida
  }
}
