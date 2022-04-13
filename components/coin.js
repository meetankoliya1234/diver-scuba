AFRAME.registerComponent("coin", {
    init: function(){
        for(var i = 1; i <= 20; i++){
            var id = `coin${i}`

            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + (-1000));

            var position = { x: posX, y: posY, z: posZ };

            this.createCoin(id, position);  
        }
    },

    createCoin: function(id, position){
        var terrainEl = document.querySelector("#terrain");
        var coinEl = document.createElement("a-entity");

        coinEl.setAttribute("id", id);
        coinEl.setAttribute("position", position);

        coinEl.setAttribute("gltf-model", "./assets/models/coin/scene.gltf");
        coinEl.setAttribute("scale", {x: 2, y: 2, z: 2});
        coinEl.setAttribute("animation-mixer", {});

        terrainEl.appendChild(coinEl);
    }
})