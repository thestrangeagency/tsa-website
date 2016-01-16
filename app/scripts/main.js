if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

// blue 72  189 236 0x48BDEC
// pink 225 39  113 0xE12771

var container, stats;

var camera, scene, renderer;

var mesh, texture, geometry, material;

var segments = 64;

var clock = new THREE.Clock();

init();
animate();

function init() {

  container = document.getElementById( 'container' );

  camera = new THREE.PerspectiveCamera( 135, window.innerWidth / window.innerHeight, 1, 2000 );
  camera.position.y = 100;

  scene = new THREE.Scene();

  geometry = new THREE.PlaneGeometry( 1000, 2000, segments, segments );
  geometry.rotateX( - Math.PI / 2 );

  material = new THREE.MeshPhongMaterial( { color: 0xE12771 } );

  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  var ambientLight = new THREE.AmbientLight( 0xffffff );
  scene.add( ambientLight );

  var light = new THREE.PointLight( 0xffffff, 1, 0 );
  light.position.set( 0, 200, -2000 );
  scene.add( light );

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor( 0x48BDEC );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, document.querySelector('body').scrollHeight );

  container = document.createElement( 'div' );
  document.body.appendChild( container );
  container.appendChild( renderer.domElement );

  // stats = new Stats();
  // stats.domElement.style.position = 'absolute';
  // stats.domElement.style.top = '0px';
  // container.appendChild( stats.domElement );

  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

  requestAnimationFrame( animate );

  render();
  // stats.update();

}

function render() {

  var delta = clock.getDelta(),
  time = clock.getElapsedTime();

  for ( var i = 0, l = geometry.vertices.length; i < l; i += 4 ) {

    geometry.vertices[ i ].y = 64 * Math.sin( i + time/2 );

  }

  mesh.geometry.verticesNeedUpdate = true;

  renderer.render( scene, camera );

}