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
  const [target] = useState(new THREE.Vector3(0, 1.2, .5))
  // const [target] = useState(new THREE.Vector3(0, 0.9, 0.5))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
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
      // renderer.outputEncoding = THREE.sRGBEncoding
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.BasicShadowMap
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 2
      // const scale = scH * 0.005 + 8.5
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )

      function update() {
        if (camera.zoom <= 0.7) {
          camera.zoom = 0.7
        }
        // if (camera.zoom >= 2.4) {
        //   camera.zoom = 2.4
        // }
      }

      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const hemi = new THREE.HemisphereLight(0xbfcbc2, 0x080820, 3)
      hemi.position.set(14, 48, 10)
      scene.add(hemi)

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      const pointLight = new THREE.PointLight(0xffffff, 0.8, 18)
      pointLight.position.set(-3, 6, -3)
      pointLight.castShadow = true
      pointLight.shadow.camera.near = 0.1
      pointLight.shadow.camera.far = 25
      scene.add(pointLight)

      const composer = new EffectComposer(renderer)
      composer.addPass(new RenderPass(scene, camera))

      const effekPass = new EffectPass(camera, new BloomEffect())
      effekPass.renderToScreen = true
      composer.addPass(effekPass)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableZoom = true
      controls.autoRotate = true
      controls.dampingFactor = 0.05
      controls.screenSpacePanning = false
      controls.minDistance = 1
      controls.maxDistance = 500
      controls.zoomOnMouseWheel = true
      controls.maxPolarAngle = Math.PI / 2
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
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 5

          camera.position.y = 15
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
