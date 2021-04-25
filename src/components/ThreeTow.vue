<template>
    <div>自动旋转</div>
</template>

<script lang="ts">
import * as THREE from "three";
import { Vue,Component } from  'vue-property-decorator';

@Component({
    name: "ThreeTow"
})
export default class ThreeTow extends Vue {
    private scene!:THREE.Scene;
    private camera!:THREE.OrthographicCamera;
    private renderer!:THREE.WebGLRenderer;
    private mesh!:THREE.Mesh;
    created(){
        /**创建场景对象Scene*/
        this.scene = new THREE.Scene();
        /** 创建一个立方体几何对象Geometry 宽,高,纵深*/
        let geometry = new THREE.BoxGeometry(100, 100, 100);
        /** 创建一个球体几何对象 */
        // let geometry = new THREE.SphereGeometry(60, 40, 40);

        // this.camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,2000);
        // this.renderer = new THREE.WebGLRenderer();
        let material = new THREE.MeshPhongMaterial({
            // color: 'red',
            //     opacity:0.7,
            //     transparent:true
                color:0x0000ff,
                specular:0x4488ee,
                shininess:12
        }); //材质对象Material
        // noinspection TypeScriptValidateTypes
        this.mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        this.scene.add(this.mesh); //网格模型添加到场景中
        /**
         * 光源设置
         */
            //点光源
        let point = new THREE.PointLight(0xffffff);
        point.position.set(400, 200, 300); //点光源位置
        this.scene.add(point); //点光源添加到场景中
        //环境光
        let ambient = new THREE.AmbientLight(0x444444);
        this.scene.add(ambient);
        // console.log(scene)
        // console.log(scene.children)
        /**
         * 相机设置
         */
        let width = 300; //窗口宽度
        let height = 300; //窗口高度
        let k = width / height; //窗口宽高比
        let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
        //创建相机对象
        this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
        this.camera.position.set(200, 200, 200); //设置相机位置
        this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
        /**
         * 创建渲染器对象
         */
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(width, height);//设置渲染区域尺寸
        this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
        this.renderer.domElement.style.display = "inline-block";
        document.body.appendChild(this.renderer.domElement); //body元素中插入canvas对象
        //执行渲染操作   指定场景、相机作为参数
        // this.renderer.render(this.scene, this.camera);
        // setInterval(() => {
        //     renderer.render(this.scene, camera);
        //     mesh.rotateY(0.01)
        //
        // },20)
        this.renders();
    }
    /**
     * 请求的函数并不一定能按照理想的60FPS频率执行，
     * 两次执行渲染函数的时间间隔也不一定相同，如果执行旋转命令的rotateY的时间间隔不同，
     * 旋转运动就不均匀，为了解决这个问题需要记录两次执行绘制函数的时间间隔
     * */
    private T0:any = new Date();//上次时间
    renders() {
        let T1:any = new Date();//本次时间
        let t = T1 - this.T0;//时间差
        this.T0 = T1;//把本次时间赋值给上次时间
        this.renderer.render(this.scene, this.camera);//执行渲染操作
        this.mesh.rotateY(0.001*t);//每次绕y轴旋转0.01弧度
        requestAnimationFrame(this.renders);//请求再次执行渲染函数render
    }

}
</script>

<style scoped>

</style>
