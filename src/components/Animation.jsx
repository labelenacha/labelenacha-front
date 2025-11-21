import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Animation = ({className = "w-full lg:w-1/2 h-[40vh] md:h-[60vh] lg:h-[70vh] z-0", style}) => {

  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

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
    dirLight.position.set(3,10,10);
    scene.add(dirLight);

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshStandardMaterial({color: 0xe99b63, metalness: 0.3, roughness: 0.4 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0,1,0);
    scene.add(cube);

    let reqId;
    const clock = new THREE.Clock();
    const animate = () => {
      const dt = clock.getDelta();
      cube.rotation.x += dt * 0.6;
      cube.rotation.y += dt * 0.8;
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
      geometry.dispose();
      material.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };

  }, []);

  return <div ref={mountRef} className={className} style={style}/>;
}

export default Animation;