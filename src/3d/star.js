import THREE from '../vendor/three';

export default function (scene, camera, h, s, l, x, y, z) {

    var textureFlare0 = THREE.ImageUtils.loadTexture('textures/sun.png');

    var light = new THREE.PointLight(0xffffff, 3, 50000);
    light.color.setHSL(h, s, l);
    light.position.set(x, y, z);
    scene.add(light);
    light = light;

    var flareColor = new THREE.Color(0xffffff);
    flareColor.setHSL(h, s, l + 0.2);

    var lensFlare = new THREE.LensFlare(textureFlare0, 100, 0.0, THREE.AdditiveBlending, flareColor);
    lensFlare.customUpdateCallback = lensFlareUpdateCallback;

    lensFlare.position.copy(light.position);
    var lensFlare = lensFlare;

    scene.add(lensFlare);

    //Callback that adjusts the size of the star in relation to how far it is from the camera

    function lensFlareUpdateCallback(object) {

      var flare;

      var vecX = -this.positionScreen.x * 2;
      var vecY = -this.positionScreen.y * 2;

      var camDistance = camera.position.length();

      for (let i = 0, len = this.lensFlares.length; i < len; i++) {

        flare = this.lensFlares[i];

        flare.x = this.positionScreen.x + vecX * flare.distance;
        flare.y = this.positionScreen.y + vecY * flare.distance;

        flare.scale = 1 / camDistance * 400;

      }

    }

    return lensFlare;

  };