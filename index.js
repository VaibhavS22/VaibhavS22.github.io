console.log(colors_avail)

var body = document.getElementById('container')
// Object.keys(colors_avail).forEach(it => {
//     if(colors_avail[it]?.hexcode){
//         var node = document.createElement("div");
//         node.className = 'colorCon'
//         node.innerHTML = `
//             <div class="name">${colors_avail[it]?.name}</div>
//             <div class="color" style="background: ${colors_avail[it]?.hexcode};"></div>
//             <div class="hexCode">${colors_avail[it]?.hexcode}</div>
//         `
//         body.appendChild(node);
//     }else{
//         var node = document.createElement("div");
//         node.className = 'colorCon'
//         node.innerHTML = `
//             <div class="name">${colors_avail[it]?.name}</div>
//             <img class="color" src="${colors_avail[it]?.texture?.url}">
//         `
//         body.appendChild(node);
//     }
// })

var hexCode = {}
var texture = {}
Object.keys(colors_avail).forEach(it => {
    if(colors_avail[it]?.texture){      
        texture[it] = colors_avail[it]
    }else{
        hexCode[it] = colors_avail[it]
    }
    
})

Object.keys(hexCode).forEach(it => {
    if(hexCode[it]?.hexcode){
        var node = document.createElement("div");
        node.className = 'colorCon'
        node.innerHTML = `
            <div class="name">${colors_avail[it]?.name}</div>
            <div class="color" style="background: ${colors_avail[it]?.hexcode};"></div>
            <div class="hexCode">${colors_avail[it]?.hexcode}</div>
        `
        body.appendChild(node);
    }

})

Object.keys(texture).forEach(it => {
    if(texture[it]?.texture){
        var node = document.createElement("div");
        node.className = 'colorCon'
        node.innerHTML = `
            <div class="name">${colors_avail[it]?.name}</div>
            <img class="color" src="${colors_avail[it]?.texture?.url}">
        `
        body.appendChild(node);
    }

})