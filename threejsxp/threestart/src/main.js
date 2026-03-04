import {
Camera,
Group,
Scene,
} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const btn=document.createElement('button')
btn.textContent="Animate"
const container=document.querySelector('scene-container')
container.append(btn)
document.body.append(btn)