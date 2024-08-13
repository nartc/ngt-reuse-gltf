import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience.component';
@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NgtCanvas],
	template: `
		<ngt-canvas [sceneGraph]="sceneGraph" />
	`,
	styles: [],
})
export class AppComponent {
	title = 'ngt-reuse-gltf';
	sceneGraph = Experience;
}
