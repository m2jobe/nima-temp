//let it all begin


const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const key = 'ppbuyxf83b8gf792q7afw8nqa';

// declare this file is a module
export {};

// augment window with the MP_SDK property
declare global {
interface Window {
    MP_SDK: any;
  }
}

showcase.addEventListener('load', async function() {
  let sdk;
  try {
    sdk = await showcase.contentWindow.MP_SDK.connect(showcase, key, '3.6');
  }
  catch(e) {
    console.error(e);
    return;
  }

 console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');
  console.log(sdk);

  //ADDING LIGHTS
const lights = await sdk.Scene.createNode();
  var initial_light = {
    enabled: true,
    color: {
      r: 1, g: 1, b: 1
    },
    intensity: 2,
  };
lights.addComponent('mp.lights',initial_light);
lights.start();


//ADDING MODEL0---------------Main Floor (7)--------------------
const modelNode0 = await sdk.Scene.createNode();

console.log("hereiamhere");
// Store the fbx component since we will need to adjust it in the next step.
const objComponent0 = modelNode0.addComponent(sdk.Scene.Component.OBJ_LOADER, {
url: '/3D_models/Poliform Dune Sofa 3D Model Files/sofa.obj',
materialUrl: '/3D_models/Poliform Dune Sofa 3D Model Files/sofa.mtl',
});

//initial scaling 
objComponent0.inputs.localScale = {
x: 1,
y: 1,
z: 1
};

//initial positioning 
modelNode0.obj3D.position.set(4.2,-0.28,0.95);  // (x, z, -y ) 
modelNode0.obj3D.rotation.set(0,-4.71225,0);  // (x, z, -y ) 
modelNode0.start();






});