import { useState, useEffect, useRef, useCallback } from 'react'
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass
} from 'postprocessing'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSpinner, DogContainer } from './threejs-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-2.4, -15, 1))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      25 * Math.sin(0.2 * Math.PI),
      10,
      35 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.095 + 11.5
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )

      function update() {
        if (camera.zoom <= 1) {
          camera.zoom = 1
        }
        if (camera.zoom >= 2.2) {
          camera.zoom = 2.2
        }
      }

      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const hemi = new THREE.HemisphereLight(0xffffbb, 0x080820, 3)
      hemi.position.set(4, 18, 10)
      scene.add(hemi)

      // pencahayaan bawah
      const ubin = new THREE.PointLight(0xcccccc, 1.5, 50)
      ubin.position.set(0, -10, 0) // ( kiri-kanan , atas-bawah , depan-belakang )
      scene.add(ubin)

      // pencahayaan atas
      // const direk = new THREE.DirectionalLight(0xffffff, 1)
      // direk.position.set(0, 35, 0)
      // direk.target.position.set(0, 1, 0)
      // direk.target.updateMatrixWorld()
      // scene.add(direk.target)

      // pencahayaan kanan
      // const pointlight = new THREE.PointLight(0xcccccc, 0.75, 50)
      // pointlight.position.set(5, 12, -6) // ( kiri-kanan , atas-bawah , depan-belakang )
      // scene.add(
      //   pointlight,
      //   new THREE.PointLightHelper(pointlight, 0.5, 0xffaa)
      // )

      // pencahayaan kiri
      // const pointlight1 = new THREE.PointLight(0xcccccc, 0.75, 50)
      // pointlight1.position.set(-15, 12, -6) // ( kiri-kanan , atas-bawah , depan-belakang )
      // scene.add(
      //   pointlight1,
      //   new THREE.PointLightHelper(pointlight1, 0.5, 0xffaa)
      // )

      // pencahayaan depan
      // const pointlight2 = new THREE.PointLight(0xffffff, 0.75, 50)
      // pointlight2.position.set(-1, 12, 15) // ( kiri-kanan , atas-bawah , depan-belakang )
      // scene.add(
      //   pointlight2,
      //   new THREE.PointLightHelper(pointlight2, 0.5, 0xffaa)
      // )

      // pencahayaan belakang
      // const pointlight3 = new THREE.PointLight(0xffffff, 2.5, 50)
      // pointlight3.position.set(4, 10, -13) // ( kiri-kanan , atas-bawah , depan-belakang )
      // scene.add(
      //   pointlight3,
      //   new THREE.PointLightHelper(pointlight3, 0.5, 0xffaa)
      // )

      // pencahayaan matahari atau pencahayaan targeting
      // const spotlight = new THREE.SpotLight(0xdb7430, 3.5)
      // spotlight.position.set(-6.5, 8, -10)
      // scene.add(spotlight)

      const composer = new EffectComposer(renderer)
      composer.addPass(new RenderPass(scene, camera))

      const effekPass = new EffectPass(camera, new BloomEffect())
      effekPass.renderToScreen = true
      composer.addPass(effekPass)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableZoom = true
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      loadGLTFModel(scene, '/scene.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        update()
        // composer.render()
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 25

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelDog
