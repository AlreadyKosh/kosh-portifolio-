import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-menu-bar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './menu-bar.component.html',
	styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {
	isOpen: boolean = false;

	toggleMenu(): void {
		this.isOpen = !this.isOpen;
	}
}
