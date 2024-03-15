import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
})
export class ButtonComponent {
	@Input() label: string = '';
	@Input() link: string = '';
	@Input() outline: boolean = false;
}
