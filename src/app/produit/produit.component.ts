import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {

  produits: any[] = [];
  nproduit: any = {nom: '', prix: 0, quantite: 1};
addProduit() {
  this.produits.push(this.nproduit);
  this.nproduit = {nom: '', prix: 0, quantite: 1};

}

deleteProduit(index: number) {
  this.produits.splice(index, 1);

}

updateProduit(index: number) {
  this.nproduit = this.produits[index];
  this.produits.splice(index, 1);
}


}
