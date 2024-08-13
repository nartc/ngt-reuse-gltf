import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input, Signal } from '@angular/core';
import { NgtArgs, NgtEuler, NgtVector3 } from 'angular-three';
import { injectGLTF } from 'angular-three-soba/loaders';
import * as THREE from 'three';
import { ColorRepresentation } from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
	nodes: {
		shoe: THREE.Mesh;
		shoe_1: THREE.Mesh;
		shoe_2: THREE.Mesh;
		shoe_3: THREE.Mesh;
		shoe_4: THREE.Mesh;
		shoe_5: THREE.Mesh;
		shoe_6: THREE.Mesh;
		shoe_7: THREE.Mesh;
	};
	materials: {
		laces: THREE.MeshStandardMaterial;
		mesh: THREE.MeshStandardMaterial;
		caps: THREE.MeshStandardMaterial;
		inner: THREE.MeshStandardMaterial;
		sole: THREE.MeshStandardMaterial;
		stripes: THREE.MeshStandardMaterial;
		band: THREE.MeshStandardMaterial;
		patch: THREE.MeshStandardMaterial;
	};
};

@Component({
	selector: 'app-shoe',
	standalone: true,
	template: `
		@if (gltf(); as gltf) {
			<ngt-group [dispose]="null" [position]="position()" [rotation]="rotation()" [scale]="scale()">
				<ngt-mesh
					[castShadow]="true"
					[receiveShadow]="true"
					[geometry]="gltf.nodes.shoe.geometry"
					[material]="gltf.materials.laces"
				/>
				<ngt-mesh [castShadow]="true" [receiveShadow]="true" [geometry]="gltf.nodes.shoe_1.geometry">
					<ngt-mesh-standard-material
						[color]="color()"
						[aoMap]="gltf.materials.mesh.aoMap"
						[normalMap]="gltf.materials.mesh.normalMap"
						[normalScale]="gltf.materials.mesh.normalScale"
						[roughnessMap]="gltf.materials.mesh.roughnessMap"
						[metalnessMap]="gltf.materials.mesh.metalnessMap"
						[metalness]="1"
					/>
				</ngt-mesh>
				<ngt-mesh
					[castShadow]="true"
					[receiveShadow]="true"
					[geometry]="gltf.nodes.shoe_2.geometry"
					[material]="gltf.materials.caps"
				/>
				<ngt-mesh
					[castShadow]="true"
					[receiveShadow]="true"
					[geometry]="gltf.nodes.shoe_3.geometry"
					[material]="gltf.materials.inner"
				/>
				<ngt-mesh
					[castShadow]="true"
					[receiveShadow]="true"
					[geometry]="gltf.nodes.shoe_4.geometry"
					[material]="gltf.materials.sole"
				/>
				<ngt-mesh
					[castShadow]="true"
					[receiveShadow]="true"
					[geometry]="gltf.nodes.shoe_5.geometry"
					[material]="gltf.materials.stripes"
				/>
				<ngt-mesh
					[castShadow]="true"
					[receiveShadow]="true"
					[geometry]="gltf.nodes.shoe_6.geometry"
					[material]="gltf.materials.band"
				/>
				<ngt-mesh
					[castShadow]="true"
					[receiveShadow]="true"
					[geometry]="gltf.nodes.shoe_7.geometry"
					[material]="gltf.materials.patch"
				/>
			</ngt-group>
		}
	`,
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgtArgs],
})
export class Shoe {
	position = input<NgtVector3>([0, 0, 0]);
	rotation = input<NgtEuler>([0, 0, 0]);
	scale = input<NgtVector3>(1);
	color = input<ColorRepresentation>('white');

	gltf = injectGLTF(() => './shoe.gltf') as Signal<GLTFResult | null>;
}
