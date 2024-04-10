import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-menu-bar',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: './menu-bar.component.html',
	styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {
	isOpen: boolean = false;

	ngOnInit() {
		this.checkScreenWidth();
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.checkScreenWidth();
	}

	checkScreenWidth() {
		if (typeof window !== 'undefined') {
			this.isOpen = window.innerWidth > 1024;
		}
	}

	toggleMenu(): void {
		this.isOpen = !this.isOpen;
	}
}
