import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'app-social-button',
	standalone: true,
	imports: [FontAwesomeModule],
	templateUrl: './social-button.component.html',
	styleUrl: './social-button.component.scss',
})
export class SocialButtonComponent {
	@Input() iconName: any = '';
	@Input() link: string = '';
}
