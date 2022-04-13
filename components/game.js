AFRAME.registerComponent("game-play", {
    schema: { elementId: {type: "string", default: "#ring1"} },

    update: function(){
        this.isCollided(this.data.elementId)
    },

    isCollided: function(elementId){
        const element = document.querySelector(elementId);

        element.addEventListner("colide", (e) => {
            if(elementId.includes("#ring")){
                console.log(elementId + "collission");
            } else if(elementId.includes("#fishes")){
                console.log("fish-collision");
            }
        });
    }
});