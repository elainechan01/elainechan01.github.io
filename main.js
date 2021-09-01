const canvas = document.getElementById('canvas');

const engine = new BABYLON.Engine(canvas, true);

function createScene(){
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.FreeCamera('freeCamera', new BABYLON.Vector3(0,1,1));

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    const box = BABYLON.MeshBuilder.CreateBox('box', {}, scene);

    return scene;
}

const scene = createScene();

engine.runRenderLoop(function(){
    scene.render();
});