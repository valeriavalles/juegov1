Crafty.init(1024, 576, document.getElementById('juego'));

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
        Crafty.log('Pony Salvaje');
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

Crafty.scene('nivel1');