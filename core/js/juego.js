Crafty.init(1024, 576, document.getElementById('juego'));

Crafty.scene('ini1', function(){

    Crafty.e("2D, Canvas, Image").attr({ x: 0, y: 0 }).image('core/img/fondo2.png');

    Crafty.e("2D, Canvas, Image").image('core/img/pn1.png').attr({x:230, y:80});
    let botonJugar = Crafty.e("2D, Canvas, Mouse, Image").image('core/img/btnJugar.png').attr({x:360, y:380});

    botonJugar.bind('Click', function(MouseEvent){
        Crafty.scene('nivel1');
    })

});

Crafty.scene('nivel1', function(){

    var objetos = {
        "sprites": {
            // "objs/tapa128.png": { // Carga el objeto desde una carpeta en la raiz del proyecto
            // //"http://localhost/upcJuego2/objs/tapa256.png": { // Carga el objeto desde una URL
            // // "tapa256.png": { // carga el objeto desde la raiz del proyecto
            //     tile: 128, // Ancho de la imagen
            //     tileh: 128, // Alto de la imagen
            //     map: {
            //         tapa: [0, 0] // Nombre de cada imagen individual
            //     }
            // },
            "core/img/b1_E.png": {
                tile: 296,
                tileh: 67,
                map: {
                    b1_E: [0, 0]
                }
            },
            "core/img/b1_C.png": {
                tile: 296,
                tileh: 67,
                map: {
                    b1_C: [0, 0]
                }
            },
            "core/img/botSalir.png": {
                tile: 202,
                tileh: 45,
                map: {
                    botSalir: [0, 0]
                }
            },
            "core/img/botSalirPres.png": {
                tile: 202,
                tileh: 45,
                map: {
                    botSalirPres: [0, 0]
                }
            }
        },
        //"images": ["badguy.bmp", "goodguy.png"],
        //"images": ["objs/botonSalir.png"],
    };

    Crafty.load(objetos);

    Crafty.e("2D, Canvas, Image").attr({ x: 0, y: 0 }).image('core/img/fondo.png');

    let tiempo1 = Crafty.e("2D, Canvas, Text").attr({x: 720, y: 30}).text('Tiempo Transcurrido: 0s')
        .textColor('#AAA')
        .textFont({ size: '30px', family: 'solano_gothic_mvb_stdBd' });

    Crafty.e("2D, Canvas, Text").attr({ x: 220, y: 140 }).text("¿DONDE PUEDO VER MIS NOTAS?")
        .textColor('#FFF')
        .textFont({ size: '56px', family: 'solano_gothic_mvb_stdBd' });

    let bot1 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 50, y: 230 }).image('core/img/b1_1.png');
    let bot2 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 360, y: 230 }).image('core/img/b1_2.png');
    let bot3 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 670, y: 230 }).image('core/img/b1_3.png');
    let bot4 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 50, y: 320 }).image('core/img/b1_4.png');
    let bot5 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 360, y: 320 }).image('core/img/b1_5.png');
    let bot6 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 670, y: 320 }).image('core/img/b1_6.png');

    let tapa1 = Crafty.e("2D, Canvas, b1_E").attr({ x: 50, y: 230 });
    let tapa2 = Crafty.e("2D, Canvas, b1_E").attr({ x: 360, y: 230 });
    let tapa3 = Crafty.e("2D, Canvas, b1_E").attr({ x: 670, y: 230 });
    let tapa4 = Crafty.e("2D, Canvas, b1_C").attr({ x: 50, y: 320 });
    let tapa5 = Crafty.e("2D, Canvas, b1_E").attr({ x: 360, y: 320 });
    let tapa6 = Crafty.e("2D, Canvas, b1_E").attr({ x: 670, y: 320 });

    ocultarTapa();

    bot1.bind('Click', function(MouseEvent){
        tapa1.visible = true;
        tapa1.removeComponent('Mouse');
    })

    bot2.bind('Click', function(MouseEvent){
        tapa2.visible = true;
        tapa2.removeComponent('Mouse');
    })

    bot3.bind('Click', function(MouseEvent){
        tapa3.visible = true;
        tapa3.removeComponent('Mouse');
    })

    bot4.bind('Click', function(MouseEvent){
        tapa4.visible = true;
        Crafty.log('Tiempo final: '+tj1);
        clearInterval(tiempoDisp);
        setTimeout(function(){
            Crafty.scene('ini2');
        }, 1500)
    })

    bot5.bind('Click', function(MouseEvent){
        tapa5.visible = true;
        tapa5.removeComponent('Mouse');
    })

    bot6.bind('Click', function(MouseEvent){
        tapa6.visible = true;
        tapa6.removeComponent('Mouse');
    })

    function ocultarTapa(){
        tapa1.visible = false;
        tapa2.visible = false;
        tapa3.visible = false;
        tapa4.visible = false;
        tapa5.visible = false;
        tapa6.visible = false;
    }

    // ======= Contador de tiempo =======

    contadorTiempo();

    function contadorTiempo(n){
        tj1 = 0;
        tiempoDisp = setInterval(function(){
            tj1 = tj1 + 1;
            Crafty.log('var t: '+tj1);
            tiempo1.text('Tiempo Transcurrido: '+tj1+'s');
        }, 1000);
    }

    // ======= Boton Salir =======

    btnSalir = Crafty.e("2D, Canvas, Mouse, botSalir").attr({x:700, y:470});
    btnSalirPres = Crafty.e("2D, Canvas, botSalirPres").attr({x:700, y:470});
    btnSalirPres.visible = false;

    btnSalir.bind('MouseOver', function(MouseEvent){
        btnSalirPres.visible = true;
    })
    btnSalir.bind('MouseOut', function(MouseEvent){
        btnSalirPres.visible = false;
    })
    btnSalir.bind('Click', function(MouseEvent){
        Crafty.log('Salir');
    })

});

Crafty.scene('ini2', function(){

    Crafty.e("2D, Canvas, Image").attr({ x: 0, y: 0 }).image('core/img/fondo2.png');

    Crafty.e("2D, Canvas, Image").image('core/img/pn2.png').attr({x:230, y:80});
    let botonJugar = Crafty.e("2D, Canvas, Mouse, Image").image('core/img/btnJugar.png').attr({x:360, y:380});

    botonJugar.bind('Click', function(MouseEvent){
        Crafty.scene('nivel2');
    })

});

Crafty.scene('nivel2', function(){
    Crafty.background('#AAA');
    Crafty.log('Pony Salvaje');
});

Crafty.scene('ini1');

/*
// ======= Configuracion =======
//Crafty.stage.elem.style.cursor = 'none' // Ocultar Cursor;
var tiempoJuego = 10; // Tiempo para cuenta regresiva en segundos.

var puntaje = 0;
// =============================

Crafty.init(360,650, document.getElementById('game'));
Crafty.e("2D, Canvas, Text").attr({ x: 30, y: 30 }).text("ENCUENTRA LA PALABRA:")
    .textColor('#FFF')
    .textFont({ size: '20px', weight: 'bold' });
var textoTiempo = Crafty.e("2D, Canvas, Text").attr({ x: 30, y: 520 })
    .textColor('#AAA')
    .textFont({ size: '16px', weight: 'bold' });
var textoPuntaje = Crafty.e("2D, Canvas, Text").attr({ x: 30, y: 480 }).text('Puntaje: 0')
    .textColor('#AAA')
    .textFont({ size: '16px', weight: 'bold' });
// Crafty.e("2D, Canvas, Text").attr({ x: 30, y: 520 }).text(function () {
//         Crafty.log('PonySqlvaje');
//     })
//     .textColor('#AAA')
//     .textFont({ size: '16px', weight: 'bold' })
//     .dynamicTextGeneration(true);
//Crafty.e('2D, DOM, Color').attr({x: 0, y: 0, w: 100, h: 100}).color('#F00');
Crafty.background('#000');

var assetsObj = {
    "sprites": {
        "objs/tapa128.png": { // Carga el objeto desde una carpeta en la raiz del proyecto
        //"http://localhost/upcJuego2/objs/tapa256.png": { // Carga el objeto desde una URL
        // "tapa256.png": { // carga el objeto desde la raiz del proyecto
            tile: 128, // Ancho de la imagen
            tileh: 128, // Alto de la imagen
            map: {
                tapa: [0, 0] // Nombre de cada imagen individual
            }
        },
        "objs/p1_128.png": {
            tile: 128,
            tileh: 128,
            map: {
                p1: [0, 0]
            }
        },
        "objs/p2_128.png": {
            tile: 128,
            tileh: 128,
            map: {
                p2: [0, 0]
            }
        },
        "objs/p3_128.png": {
            tile: 128,
            tileh: 128,
            map: {
                p3: [0, 0]
            }
        },
        "objs/p4_128.png": {
            tile: 128,
            tileh: 128,
            map: {
                p4: [0, 0]
            }
        }
    },
    //"images": ["badguy.bmp", "goodguy.png"],
    //"images": ["objs/botonSalir.png"],
};

Crafty.load(assetsObj);

var botonSalir = Crafty.e("2D, Canvas, Image").attr({ x: 35, y: 560 }).image('objs/botonSalir.png');

// =============================================================================================

let espacios = [];
let arr_botSel = [];
let bot_bloqueados = [];
let tapas = [];

genPos();
contadorTiempo(tiempoJuego)

function genPos(){
    let n = Crafty.math.randomInt(1, 4);
    //Crafty.log('n: '+n);
    let x = espacios.indexOf(n);
    //Crafty.log('Valor n esta en array?: '+x);
    if(x == -1){
        espacios.push(n);
        let v = verifEspLLeno();
        if(v == false){
            genPos();
        }else{
            //Crafty.log('Proceso de generado completo');
            //Crafty.log(espacios[0]+' '+espacios[1]+' '+espacios[2]+' '+espacios[3]);
            eval('p'+espacios[0]+' = Crafty.e("2D, Canvas, Mouse, p'+espacios[0]+'").attr({x: 30, y:140})');
            eval('p'+espacios[1]+' = Crafty.e("2D, Canvas, Mouse, p'+espacios[1]+'").attr({x: 180, y:140})');
            eval('p'+espacios[2]+' = Crafty.e("2D, Canvas, Mouse, p'+espacios[2]+'").attr({x: 30, y:290})');
            eval('p'+espacios[3]+' = Crafty.e("2D, Canvas, Mouse, p'+espacios[3]+'").attr({x: 180, y:290})');

            p1.bind('Click', function(MouseEvent){
                Crafty.log('p1');
                tapa1.visible = false;
                p1.removeComponent('Mouse');
                botSelec('palabra1', 'p1', 'tapa1');
            })

            p2.bind('Click', function(MouseEvent){
                Crafty.log('p2');
                tapa2.visible = false;
                p2.removeComponent('Mouse');
                botSelec('palabra1', 'p2', 'tapa2');
            })

            p3.bind('Click', function(MouseEvent){
                Crafty.log('p3');
                tapa3.visible = false;
                p3.removeComponent('Mouse');
                botSelec('palabra2', 'p3', 'tapa3');
            })

            p4.bind('Click', function(MouseEvent){
                Crafty.log('p4');
                tapa4.visible = false;
                p4.removeComponent('Mouse');
                botSelec('palabra2', 'p4', 'tapa4');
            })

            eval('tapa'+espacios[0]+' = Crafty.e("2D, Canvas, tapa").attr({x: 30, y:140})');
            eval('tapa'+espacios[1]+' = Crafty.e("2D, Canvas, tapa").attr({x: 180, y:140})');
            eval('tapa'+espacios[2]+' = Crafty.e("2D, Canvas, tapa").attr({x: 30, y:290})');
            eval('tapa'+espacios[3]+' = Crafty.e("2D, Canvas, tapa").attr({x: 180, y:290})');
            
            // var tapa1 = Crafty.e("2D, Canvas, p1")
            // .attr({x: 30, y:140});

            // var tapa2 = Crafty.e("2D, Canvas, p2")
            // .attr({x: 180, y:140});

            // var tapa3 = Crafty.e("2D, Canvas, p3")
            // .attr({x: 30, y:290});

            // var tapa4 = Crafty.e("2D, Canvas, p4")
            // .attr({x: 180, y:290});
        }
    }else{
        genPos();
    }
}

function botSelec(x, bp, t){
    arr_botSel.push(x);
    bot_bloqueados.push(bp);
    tapas.push(t);
    let n = arr_botSel.length;
    Crafty.log('items en arr_botSel: '+n+' | Valores: '+arr_botSel+' | Botones Bloqueados: '+bot_bloqueados+' | Tapas: '+tapas);
    if(n < 2){
        //arr_botSel.push(x);
        //Crafty.log('n<2');
    }else if(n == 2){
        let a = compararBot(arr_botSel);
        if(a == true){
            Crafty.log('Botones iguales');
            puntaje += 1;
            textoPuntaje.text('Puntaje: '+puntaje);
            limpiarArray(arr_botSel);
            limpiarArray(bot_bloqueados);
            limpiarArray(tapas);
        }else if(a == false){
            Crafty.log('Botones diferentes');
            setTimeout(function(){
                limpiarArray(arr_botSel);
                eval(bot_bloqueados[0]+".addComponent('Mouse')");
                eval(bot_bloqueados[1]+".addComponent('Mouse')");
                limpiarArray(bot_bloqueados);
                eval(tapas[0]+".visible = true");
                eval(tapas[1]+".visible = true");
                limpiarArray(tapas);
            }, 1000);
        }
    }else{
        Crafty.log('Error 0001 | n: '+n);
    }
}

function limpiarArray(nombreArray){
    while(nombreArray.length>0){
        nombreArray.pop();
        //Crafty.log(nombreArray.length);
    }
}

function compararBot(arr){
    if(arr[0] == arr[1]){
        resp = true;
    }else{
        resp = false;
    }
    return resp;
}

function verifEspLLeno(){
    if(espacios.length <= 3){
        resp = false
    }else{
        resp = true
    }
    return resp;
}

function genCoorPos(n){
    if(n == 0){
        pos = [30, 140];
    }else if(n == 1){
        pos = [180, 140];
    }else if(n == 2){
        pos = [30, 290];
    }else if(n == 3){
        pos = [180, 290];
    }
    return pos;
}

function contadorTiempo(t){
    var tiempoDisp = setInterval(function(){
        if(t >= 0){
            Crafty.log(t);
            textoTiempo.text('Tiempo restante: '+t);
            t = t-1;
        }else if(t < 0){
            Crafty.log('Fin del tiempo... | t='+t);
            textoTiempo.text('Se termino el tiempo! | Game Over');
            clearInterval(tiempoDisp);
        }
    }, 1000);
}
*/