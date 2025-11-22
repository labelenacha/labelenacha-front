import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons";

const RamenAnimation = ({className = "w-full lg:w-1/2 h-[35vh] md:h-[55vh] lg:h-[65vh] z-0", style}) => {

  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let model = null;
    let mixer = null;
    let activeAction = null;
    let reqId = null;

    let targetYaw = 0, targetPitch = 0, baseYaw = 0, basePitch = 0;
    const smoothFactor = 0.05;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(3, 10, 10);
    scene.add(dirLight);

    const loader = new GLTFLoader();
    loader.load("/models/pusheen_cat_ramen/scene.gltf", (gltf) => {
        model = gltf.scene;

        const bbox = new THREE.Box3().setFromObject(model);
        const size = bbox.getSize(new THREE.Vector3());
        const center = bbox.getCenter(new THREE.Vector3());

        const desiredSize = 4;
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = maxDim > 0 ? desiredSize / maxDim : 1;
        model.scale.setScalar(scale);

        model.position.sub(center.multiplyScalar(scale));
        model.position.y += (Math.abs(bbox.min.y + 1) * scale);
        model.position.x -= 1;

        model.rotateX(0.4);
        model.rotateY(-0.65);

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        basePitch = model.rotation.x;
        baseYaw = model.rotation.y;

        scene.add(model);

        if (gltf.animations && gltf.animations.length > 0) {
          console.log(gltf.animations);
          mixer = new THREE.AnimationMixer(model);
          const clip = gltf.animations[0];
          activeAction = mixer.clipAction(clip);
          activeAction.reset();
          activeAction.setLoop(THREE.LoopRepeat, Infinity);
          activeAction.play();
        } else {
          console.warn("The loaded model does not contain any animations.");
        }
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    const maxYaw = 0.05;
    const maxPitch = 0.10;

    const onPointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY);
      if (clientX == null || clientY == null) return;

      const nx = ((clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((clientY - rect.top) / rect.height - 0.5) * 2;

      targetYaw = nx * maxYaw;
      targetPitch = -ny * maxPitch;
    };

    const onPointerLeave = () => {
      targetYaw = 0;
      targetPitch = 0;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    mount.addEventListener("pointerleave", onPointerLeave);


    const clock = new THREE.Clock();
    const animate = () => {
      const dt = clock.getDelta();

      if (mixer) mixer.update(dt);

      if (model) {
        const desiredYaw = baseYaw + targetYaw;
        const desiredPitch = basePitch + targetPitch;

        model.rotation.y = THREE.MathUtils.lerp(model.rotation.y, desiredYaw, smoothFactor);
        model.rotation.x = THREE.MathUtils.lerp(model.rotation.x, desiredPitch, smoothFactor);
      }

      renderer.render(scene, camera);
      reqId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      mount.removeEventListener("pointerleave", onPointerLeave);

      if (mixer) {
        mixer.stopAllAction();
        if (model) mixer.uncacheRoot(model);
        mixer = null;
      }

      if (model) {
        model.traverse((child) => {
          if (child.isMesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach((m) => {
                  if (m.map) m.map.dispose();
                  m.dispose();
                });
              } else {
                if (child.material.map) child.material.map.dispose();
                child.material.dispose();
              }
            }
          }
        });
      }

      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };

  }, []);

  return <div ref={mountRef} className={className} style={style}/>;
}

export default RamenAnimation;