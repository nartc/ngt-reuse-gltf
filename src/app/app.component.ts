import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NgtCanvas],
	template: `
		<ngt-canvas [sceneGraph]="sceneGraph" [shadows]="true" [camera]="{ position: [5, 0, 5], fov: 35 }" />
	`,
	styles: `
		:host {
			display: block;
			height: 100vh;
		}
	`,
})
export class AppComponent {
	sceneGraph = Experience;
}
