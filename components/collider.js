AFRAME.registerComponent("fish-swim", {
    init: function(){
        for(i = 1; i <= 20; i++){
            var id = `fish${i}`

            var posX = (Math.random() * 3000 + (-1000));
            var posY = (Math.random() * 2 + (-1));
            var posY = (Math.random() * 3000 + (-1000));

            var position = {x: posX, y: posY, z: posZ};

            this.fly(id, position);
        }
    },

    fly: (id, position) => {
        var terrainEL = document.querySelector("#terrain");

        var fishEL = document.createElement("a-entity");

        fishEL.setAttribute("id", id)
        fishEL.setAttribute("position", position)
        fishEL.setAttribute("scale", {x: 500, y: 500, z: 500});
        fishEL.setAttribute("gltf-model", "./assets/models/fish.scene.gltf");
        fishEL.setAttribute("animation-mixer", {});
        fishEL.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 5
        });
        fishEL.setAttribute("game-play", {
            elementId: `#${id}`
        });

        terrainEL.appendChild(fishEL);
    }
})