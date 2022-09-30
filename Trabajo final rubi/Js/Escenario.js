const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);
const textura1 = new THREE.TextureLoader();
const matcap1 = textura1.load("../Images/Hierba.jpg")
const textura2 = new THREE.TextureLoader();
const matcap2 = textura2.load("../Images/Piso.jpg")
const textura3 = new THREE.TextureLoader();
const matcap3 = textura3.load("../Images/Suelo.jpg")
const textura4 = new THREE.TextureLoader();
const matcap4 = textura4.load("../Images/Hierba.jpg")

var loader = new THREE.TextureLoader();
loader.load('../images/mapa juego.jpg', function(texture){
    scene.background = texture;
})

const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const gltfLoader = new THREE.GLTFLoader();

gltfLoader.load('../Images/Hombre/scene.gltf',
(gltf)=>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(2,2,2);
    loaderObjeto.position.y = -4.5;
    loaderObjeto.position.x = -6.2;
    loaderObjeto.rotation.y = 0.6;
    console.log("carga completa");
    scene.add(loaderObjeto);
    const Dcontrol = new THREE.DragControls( [loaderObjeto], camara, renderer.domElement);
    Dcontrol.deactivate();
    Dcontrol.activate();
}, ()=>{
    console.log("cargando");
}, ()=>{
    console.log("error");
}
)
const gltfLoader2 = new THREE.GLTFLoader();

gltfLoader2.load('../Images/Female/scene.gltf',
(gltf)=>{
    var loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(0.02,0.02,0.02);
    loaderObjeto2.position.y = -4.5;
    loaderObjeto2.position.x = -4;
    loaderObjeto2.rotation.y = 0.6;
    console.log("carga completa");
    scene.add(loaderObjeto2);
    const Dcontrol = new THREE.DragControls( [loaderObjeto2], camara, renderer.domElement);
    Dcontrol.deactivate();
    Dcontrol.activate();
}, ()=>{
    console.log("cargando");
}, ()=>{
    console.log("error");
}
)
const gltfLoader3 = new THREE.GLTFLoader();

gltfLoader3.load('../Images/avatar_01/scene.gltf',
(gltf)=>{
    var loaderObjeto3 = gltf.scene;
    loaderObjeto3.scale.set(2,2,2);
    loaderObjeto3.position.y = -0.2;
    loaderObjeto3.position.x = 6;
    loaderObjeto3.rotation.y = -0.3;
    console.log("carga completa");
    scene.add(loaderObjeto3);
    const Dcontrol = new THREE.DragControls( [loaderObjeto3], camara, renderer.domElement);
    Dcontrol.deactivate();
    Dcontrol.activate();
}, ()=>{
    console.log("cargando");
}, ()=>{
    console.log("error");
}

)

const nivel1 = new THREE.SphereGeometry(1,4,8);
const material1 = new THREE.MeshMatcapMaterial( );
const esfera1 = new THREE.Mesh(nivel1, material1);
material1.matcap = matcap1;
scene.add(esfera1)
esfera1.position.z = -16
esfera1.position.x = -14.3
esfera1.position.y = -4.5


const nivel2 = new THREE.SphereGeometry(1,4,8);
const material2 = new THREE.MeshMatcapMaterial( );
const esfera2 = new THREE.Mesh(nivel2, material2);
material2.matcap = matcap2;
scene.add(esfera2)
esfera2.position.z = -16
esfera2.position.x = 0.6
esfera2.position.y = -3.8


const nivel3 = new THREE.SphereGeometry(1,4,8);
const material3 = new THREE.MeshMatcapMaterial( );
const esfera3 = new THREE.Mesh(nivel3, material3);
material3.matcap = matcap3;
scene.add(esfera3)
esfera3.position.z = -16
esfera3.position.x = 13.6
esfera3.position.y = 0.8


const nivel4 = new THREE.SphereGeometry(1,4,8);
const material4 = new THREE.MeshMatcapMaterial( );
const esfera4 = new THREE.Mesh(nivel4, material4);
material4.matcap = matcap4;
scene.add(esfera4)

esfera4.position.z = -16
esfera4.position.x = 11.3
esfera4.position.y = 7.2

material1.transparent = true;
material2.transparent = true;
material3.transparent = true;
material4.transparent = true;
/* material1.opacity = 0.8;
material2.opacity = 0.8;
material3.opacity = 0.8;
material4.opacity = 0.8;
 */
let objects = [esfera1, esfera2, esfera3, esfera4]

const drag = new THREE.DragControls( objects, camara, renderer.domElement);
drag.deactivate();
drag.activate();

drag.addEventListener("hoveron",function(event){
	event.object.material.opacity = 0.8
    
});
drag.addEventListener("hoveroff",function(event){
    event.object.material.transparence = false;
    event.object.material.opacity = 1
});

camara.position.z = 5;

const light1 = new THREE.DirectionalLight(0xffffff,1)
light1.position.set(6,6,6)
scene.add(light1)

const luz = new THREE.AmbientLight(0xffffff,1)
scene.add(luz)

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camara);
}

animate();