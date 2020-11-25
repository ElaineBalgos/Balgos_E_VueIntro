(() => { 
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        // el: "#app", el: means element

        // vue instance {{ interpulated / replaced inside the data opbject }}
        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",
            removeAformat: true,
            showBioData: false,

            professors: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ"},
                { name: "John", role: "prof", nickname: "super chill" },
                { name: "Joe", role: "prof", nickname: "Teddy Bear" }
            ]
        },
        // This is the "mounted" lifecycle hook. Vue is done creating otseld, and has attached iyseld to the "app" div ont he page
        mounted: function() {
            console.log("vue is mounted!");
            // only will alert once / opoup message in UI 
            // alert("Hey There! your vue is ready!");

            this.professors.push({name: "Jarrod", role:"supermodel prof", nickname: "Zoolander"} )
        },

        // run a method when we change our vue  (update the DOM with Vue)
        updated: function() {
            console.log('Vue just updated the DOM')
        },

        // event handling
        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

            clickHeader() {
                console.log("clicked on the header");
            },

            removeProf(target) {
                // remove this form from th professors array
                console.log('clicked to remove prof', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the vue instance itself by default
                this.showBioData = this.showBioData ? false : true
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();