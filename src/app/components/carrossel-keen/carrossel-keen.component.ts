import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoCardComponent } from '../projeto-card/projeto-card.component';

@Component({
	selector: 'app-carrossel-keen',
	standalone: true,
	imports: [CommonModule, ProjetoCardComponent],
	templateUrl: './carrossel-keen.component.html',
	styleUrl: './carrossel-keen.component.scss',
})
export class CarrosselKeenComponent {
	items: string[] = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5']; // Exemplo de dados dos cards
	activeIndex: number = 0;
	cardWidth: number = 300; // Largura do card
	offsetX: number = 0;

	prev(): void {
		this.activeIndex =
			(this.activeIndex - 1 + this.items.length) % this.items.length;
		this.offsetX += this.cardWidth;
		if (this.activeIndex === this.items.length - 1) {
			setTimeout(() => {
				this.activeIndex = 0;
				this.offsetX = 0;
			}, 500); // tempo da transição
		}
	}

	next(): void {
		this.activeIndex = (this.activeIndex + 1) % this.items.length;
		this.offsetX -= this.cardWidth;
		if (this.activeIndex === 0) {
			setTimeout(() => {
				this.activeIndex = this.items.length - 1;
				this.offsetX = -this.cardWidth * this.items.length;
			}, 500); // tempo da transição
		}
	}
}
