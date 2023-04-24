<template>
    <div id="container" ref="star">
    </div>
</template>

<script>
import * as THREE from 'three'

export default {
    name: 'Star',
    data: function() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            10, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true })

        //Create sphere
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(5, 50, 50), 
            new THREE.MeshBasicMaterial({
                color : "#0000FF"
            })
        )

        const light = new THREE.DirectionalLight('hsl(0, 100%, 100%)')

        return {
            scene: scene,
            camera: camera,
            renderer: renderer,
            light: light,
            sphere: sphere,
            speed: 0.01
        }
    },
    created: function() {
        this.scene.add(this.camera)
        this.scene.add(this.light)
        this.scene.add(this.sphere)
        this.scene.add(this.axes)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.light.position.set(0, 0, 10)
        this.camera.position.set(0, 0, 75)
        this.scene.background = new THREE.Color(0x000000)
        this.sphere.position.set(0, 0, 0)
        this.controls.rotateSpeed = 1.0
        this.controls.zoomSpeed = 5
        this.controls.panSpeed = 0.8
        this.controls.noZoom = false
        this.controls.noPan = false
        this.controls.staticMoving = true
        this.controls.dynamicDampingFactor = 0.3
    },
    mounted: function() {
        this.$refs.star.appendChild(this.renderer.domElement)
        this.animate()
    },
    methods: {
        animate: function() {
            requestAnimationFrame(this.animate)
            this.renderer.render(this.scene, this.camera)
        }
    }
}
</script>

<style lang="scss"></style>
