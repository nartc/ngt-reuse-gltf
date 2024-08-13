import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';
import { extend } from 'angular-three';
import { NgtsCameraControls } from 'angular-three-soba/controls';
import { NgtsAccumulativeShadows, NgtsEnvironment, NgtsRandomizedLights } from 'angular-three-soba/staging';
import * as THREE from 'three';
import { Shoe } from './shoe.component';

extend(THREE);

@Component({
	standalone: true,
	template: `
		<ngt-ambient-light [intensity]="Math.PI" />

		<app-shoe [position]="[0, 0, -0.85]" [rotation]="[0, 0.5, Math.PI]" [scale]="-1" color="red" />
		<app-shoe [position]="[0, 0, 0.85]" color="green" />

		<ngts-accumulative-shadows
			[options]="{ position: [0, -0.5, 0], temporal: true, frames: 100, alphaTest: 0.75, opacity: 0.9 }"
		>
			<ngts-randomized-lights [options]="{ radius: 6, position: [5, 5, -10], bias: 0.001 }" />
		</ngts-accumulative-shadows>

		<ngts-camera-controls />
		<ngts-environment [options]="{ preset: 'city' }" />
	`,
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgtsCameraControls, NgtsEnvironment, Shoe, NgtsAccumulativeShadows, NgtsRandomizedLights],
})
export class Experience {
	protected readonly Math = Math;
}
