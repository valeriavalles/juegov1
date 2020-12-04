Crafty.init(1024, 576, document.getElementById('juego'));

var obj = {
    "sprites": {
        // "/core/img/tapa.png": { // Carga el objeto desde una carpeta en la raiz del proyecto
        // //"http://localhost/upcJuego2/objs/tapa256.png": { // Carga el objeto desde una URL
        // // "tapa.png": { // carga el objeto desde la raiz del proyecto
        //     tile: 128, // Ancho de la imagen
        //     tileh: 128, // Alto de la imagen
        //     map: {
        //         tapa: [0, 0] // Nombre de cada imagen individual
        //     }
        // },
        // ======= General =======
        "/core/img/pn1.png": {
            tile: 538,
            tileh: 371,
            map: {
                pn1: [0, 0]
            }
        },
        "/core/img/pn2.png": {
            tile: 538,
            tileh: 371,
            map: {
                pn2: [0, 0]
            }
        },
        "/core/img/pn3.png": {
            tile: 538,
            tileh: 371,
            map: {
                pn3: [0, 0]
            }
        },
        "/core/img/pn4.png": {
            tile: 538,
            tileh: 371,
            map: {
                pn4: [0, 0]
            }
        },
        "/core/img/botSalir.png": {
            tile: 202,
            tileh: 45,
            map: {
                botSalir: [0, 0]
            }
        },
        "/core/img/botSalirPres.png": {
            tile: 202,
            tileh: 45,
            map: {
                botSalirPres: [0, 0]
            }
        },
        // ======= Juego 1 =======
        "/core/img/b1_E.png": {
            tile: 296,
            tileh: 67,
            map: {
                b1_E: [0, 0]
            }
        },
        "/core/img/b1_C.png": {
            tile: 296,
            tileh: 67,
            map: {
                b1_C: [0, 0]
            }
        },
        // ======= Juego 2 =======
        "/core/img/tapa.png": {
            tile: 128,
            tileh: 128,
            map: {
                tapa: [0, 0]
            }
        },
        "/core/img/p1.png": {
            tile: 128,
            tileh: 128,
            map: {
                p1: [0, 0]
            }
        },
        "/core/img/p2.png": {
            tile: 128,
            tileh: 128,
            map: {
                p2: [0, 0]
            }
        },
        "/core/img/p3.png": {
            tile: 128,
            tileh: 128,
            map: {
                p3: [0, 0]
            }
        },
        "/core/img/p4.png": {
            tile: 128,
            tileh: 128,
            map: {
                p4: [0, 0]
            }
        },
        "/core/img/p5.png": {
            tile: 128,
            tileh: 128,
            map: {
                p5: [0, 0]
            }
        },
        "/core/img/p6.png": {
            tile: 128,
            tileh: 128,
            map: {
                p6: [0, 0]
            }
        },
        "/core/img/p7.png": {
            tile: 128,
            tileh: 128,
            map: {
                p7: [0, 0]
            }
        },
        "/core/img/p8.png": {
            tile: 128,
            tileh: 128,
            map: {
                p8: [0, 0]
            }
        },
        // ======= Juego 4 =======
        "/core/img/gra1.png": {
            tile: 42,
            tileh: 40,
            map: {
                gra1: [0, 0]
            }
        },
        "/core/img/btnJ4.png": {
            tile: 50,
            tileh: 50,
            map: {
                btnJ4: [0, 0]
            }
        }
    },
};

Crafty.load(obj);

Crafty.scene('ini1', function(){

    Crafty.e("2D, Canvas, Image").attr({ x: 0, y: 0 }).image('/core/img/fondo2.png');

    Crafty.e("2D, Canvas, pn1").attr({x:230, y:80});
    let botonJugar = Crafty.e("2D, Canvas, Mouse, Image").image('/core/img/btnJugar.png').attr({x:360, y:380});

    botonJugar.bind('Click', function(MouseEvent){
        Crafty.scene('nivel1');
    })

});

Crafty.scene('nivel1', function(){

    Crafty.e("2D, Canvas, Image").attr({ x: 0, y: 0 }).image('/core/img/fondo.png');

    let tiempo1 = Crafty.e("2D, Canvas, Text").attr({x: 720, y: 30}).text('Tiempo Transcurrido: 0s')
        .textColor('#AAA')
        .textFont({ size: '30px', family: 'solano_gothic_mvb_stdBd' });

    Crafty.e("2D, Canvas, Text").attr({ x: 220, y: 140 }).text("¿DONDE PUEDO VER MIS NOTAS?")
        .textColor('#FFF')
        .textFont({ size: '56px', family: 'solano_gothic_mvb_stdBd' });

    let bot1 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 50, y: 230 }).image('/core/img/b1_1.png');
    let bot2 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 360, y: 230 }).image('/core/img/b1_2.png');
    let bot3 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 670, y: 230 }).image('/core/img/b1_3.png');
    let bot4 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 50, y: 320 }).image('/core/img/b1_4.png');
    let bot5 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 360, y: 320 }).image('/core/img/b1_5.png');
    let bot6 = Crafty.e("2D, Canvas, Image, Mouse").attr({ x: 670, y: 320 }).image('/core/img/b1_6.png');

    let tapa1 = Crafty.e("2D, Canvas, b1_E").attr({ x: 50, y: 230 });
    let tapa2 = Crafty.e("2D, Canvas, b1_E").attr({ x: 360, y: 230 });
    let tapa3 = Crafty.e("2D, Canvas, b1_E").attr({ x: 670, y: 230 });
    let tapa4 = Crafty.e("2D, Canvas, b1_C").attr({ x: 50, y: 320 });
    let tapa5 = Crafty.e("2D, Canvas, b1_E").attr({ x: 360, y: 320 });
    let tapa6 = Crafty.e("2D, Canvas, b1_E").attr({ x: 670, y: 320 });

    ocultarTapa();

    bot1.bind('Click', function(MouseEvent){
        tapa1.visible = true;
        bot1.removeComponent('Mouse');
    })

    bot2.bind('Click', function(MouseEvent){
        tapa2.visible = true;
        bot2.removeComponent('Mouse');
    })

    bot3.bind('Click', function(MouseEvent){
        tapa3.visible = true;
        bot3.removeComponent('Mouse');
    })

    bot4.bind('Click', function(MouseEvent){
        tapa4.visible = true;
        bot4.removeComponent('Mouse');
        Crafty.log('Tiempo final: '+tj1);
        clearInterval(tiempoDisp);
        setTimeout(function(){
            Crafty.scene('ini2');
        }, 1500)
    })

    bot5.bind('Click', function(MouseEvent){
        tapa5.visible = true;
        bot5.removeComponent('Mouse');
    })

    bot6.bind('Click', function(MouseEvent){
        tapa6.visible = true;
        bot6.removeComponent('Mouse');
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

    Crafty.e("2D, Canvas, Image").attr({ x: 0, y: 0 }).image('/core/img/fondo2.png');

    Crafty.e("2D, Canvas, pn2").attr({x:230, y:80});
    let botonJugar = Crafty.e("2D, Canvas, Mouse, Image").image('/core/img/btnJugar.png').attr({x:360, y:380});

    botonJugar.bind('Click', function(MouseEvent){
        Crafty.scene('nivel2');
    })

});

Crafty.scene('nivel2', function(){

    Crafty.e("2D, Canvas, Image").attr({ x: 0, y: 0 }).image('/core/img/fondo.png');

    Crafty.e("2D, Canvas, Text").attr({ x: 50, y: 40 }).text("ENCUENTRA LAS PALABRAS:")
        .textColor('#FFF')
        .textFont({ size: '56px', family: 'solano_gothic_mvb_stdBd' });

    let fondo_p1 = Crafty.e("2D, Canvas, Color").attr({x: 700, y: 135, w: 265, h: 57}).color('#FFF');
    let fondo_p2 = Crafty.e("2D, Canvas, Color").attr({x: 700, y: 212, w: 265, h: 57}).color('#FFF');
    let fondo_p3 = Crafty.e("2D, Canvas, Color").attr({x: 700, y: 289, w: 265, h: 57}).color('#FFF');
    let fondo_p4 = Crafty.e("2D, Canvas, Color").attr({x: 700, y: 366, w: 265, h: 57}).color('#FFF');

    Crafty.e("2D, Canvas, Text").attr({x: 740, y: 152}).text('CENTRAL TELEFÓNICA')
        .textColor('#000')
        .textFont({size: '30px', family: 'solano_gothic_mvb_stdBd'});
    Crafty.e("2D, Canvas, Text").attr({x: 740, y: 227}).text('CONTACTO WEB')
        .textColor('#000')
        .textFont({size: '30px', family: 'solano_gothic_mvb_stdBd'});
    Crafty.e("2D, Canvas, Text").attr({x: 740, y: 305}).text('WHATSAPP IT SERVICE')
        .textColor('#000')
        .textFont({size: '30px', family: 'solano_gothic_mvb_stdBd'});
    Crafty.e("2D, Canvas, Text").attr({x: 740, y: 382}).text('ALMA')
        .textColor('#000')
        .textFont({size: '30px', family: 'solano_gothic_mvb_stdBd'});

    let tiempo2 = Crafty.e("2D, Canvas, Text").attr({x: 720, y: 30}).text('Tiempo Transcurrido: 0s')
        .textColor('#AAA')
        .textFont({ size: '30px', family: 'solano_gothic_mvb_stdBd' });

    // ======= Generacion de valores aleatorios para los elementos de cada posicion =======

    function shuffle(arr) {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    };

    function genPos(){
        arrPosInicial = [1, 2, 3, 4, 5, 6, 7, 8]
        arrPos = shuffle(arrPosInicial);
        Crafty.log(arrPos);
    }

    genPos();

    eval('p'+arrPos[0]+' = Crafty.e("2D, Canvas, Mouse, p'+arrPos[0]+'").attr({x: 90, y:140})');
    eval('p'+arrPos[1]+' = Crafty.e("2D, Canvas, Mouse, p'+arrPos[1]+'").attr({x: 240, y:140})');
    eval('p'+arrPos[2]+' = Crafty.e("2D, Canvas, Mouse, p'+arrPos[2]+'").attr({x: 90, y:290})');
    eval('p'+arrPos[3]+' = Crafty.e("2D, Canvas, Mouse, p'+arrPos[3]+'").attr({x: 240, y:290})');
    eval('p'+arrPos[4]+' = Crafty.e("2D, Canvas, Mouse, p'+arrPos[4]+'").attr({x: 390, y:140})');
    eval('p'+arrPos[5]+' = Crafty.e("2D, Canvas, Mouse, p'+arrPos[5]+'").attr({x: 540, y:140})');
    eval('p'+arrPos[6]+' = Crafty.e("2D, Canvas, Mouse, p'+arrPos[6]+'").attr({x: 390, y:290})');
    eval('p'+arrPos[7]+' = Crafty.e("2D, Canvas, Mouse, p'+arrPos[7]+'").attr({x: 540, y:290})');

    eval('tapa'+arrPos[0]+' = Crafty.e("2D, Canvas, tapa").attr({x: 90, y:140})');
    eval('tapa'+arrPos[1]+' = Crafty.e("2D, Canvas, tapa").attr({x: 240, y:140})');
    eval('tapa'+arrPos[2]+' = Crafty.e("2D, Canvas, tapa").attr({x: 90, y:290})');
    eval('tapa'+arrPos[3]+' = Crafty.e("2D, Canvas, tapa").attr({x: 240, y:290})');
    eval('tapa'+arrPos[4]+' = Crafty.e("2D, Canvas, tapa").attr({x: 390, y:140})');
    eval('tapa'+arrPos[5]+' = Crafty.e("2D, Canvas, tapa").attr({x: 540, y:140})');
    eval('tapa'+arrPos[6]+' = Crafty.e("2D, Canvas, tapa").attr({x: 390, y:290})');
    eval('tapa'+arrPos[7]+' = Crafty.e("2D, Canvas, tapa").attr({x: 540, y:290})');

    var puntaje = 0;

    arr_palabras = [];
    arr_botSelec = [];
    arr_tapas = [];

    arr_palDesc = []; // Palabras descubiertas

    function vaciarArray(nombreArray){
        while (nombreArray.length > 0) {
            nombreArray.pop();
        }
    }

    function victoria(){
        if(puntaje == 4){
            Crafty.log('Tiempo final: '+tj2);
            clearInterval(tiempoDisp);
            setTimeout(() => {
                Crafty.scene('ini3');
                //Crafty.log('Fin del juego');
            }, 1000);
        }
    }

    function desactivarBotones(){
        if(p1.has('Mouse')){
            p1.removeComponent('Mouse');
        }
        if(p2.has('Mouse')){
            p2.removeComponent('Mouse');
        }
        if(p3.has('Mouse')){
            p3.removeComponent('Mouse');
        }
        if(p4.has('Mouse')){
            p4.removeComponent('Mouse');
        }
        if(p5.has('Mouse')){
            p5.removeComponent('Mouse');
        }
        if(p6.has('Mouse')){
            p6.removeComponent('Mouse');
        }
        if(p7.has('Mouse')){
            p7.removeComponent('Mouse');
        }
        if(p8.has('Mouse')){
            p8.removeComponent('Mouse');
        }
    }

    function activarBotones(){
        if(p1.has('Mouse') == false){
            p1.addComponent('Mouse');
        }
        if(p2.has('Mouse') == false){
            p2.addComponent('Mouse');
        }
        if(p3.has('Mouse') == false){
            p3.addComponent('Mouse');
        }
        if(p4.has('Mouse') == false){
            p4.addComponent('Mouse');
        }
        if(p5.has('Mouse') == false){
            p5.addComponent('Mouse');
        }
        if(p6.has('Mouse') == false){
            p6.addComponent('Mouse');
        }
        if(p7.has('Mouse') == false){
            p7.addComponent('Mouse');
        }
        if(p8.has('Mouse') == false){
            p8.addComponent('Mouse');
        }
    }

    function botSelec(palabra, botonPresionado, tapa){
        Crafty.log(botonPresionado);
        
        arr_palabras.push(palabra);
        arr_botSelec.push(botonPresionado);
        arr_tapas.push(tapa);

        eval(tapa+".visible = false;");
        // eval(botonPresionado+".unbind('Click')");
        
        if(arr_palabras.length < 2){
            //Crafty.log('--- '+arr_palabras.length);
            Crafty.log('Falta elegir una segunda opcion...');
        }else if(arr_palabras.length >= 2){
            Crafty.log('Comparamos las palabras: '+arr_palabras[0]+' | '+arr_palabras[1]);
            Crafty.log('Botones presionados: '+arr_botSelec[0]+' | '+arr_botSelec[1]);
            desactivarBotones();
            if(arr_palabras[0] == arr_palabras[1]){
                //Crafty.log('--- '+arr_palabras.length);
                //Crafty.log('Palabras iguales');
                arr_palDesc.push(arr_palabras[0]);
                eval(arr_botSelec[0]+".unbind('Click');");
                eval(arr_botSelec[1]+".unbind('Click');");
                //Crafty.log('->-'+arr_botSelec);
                //Crafty.log('-->>-- '+arr_palabras);
                if(arr_palabras[0] == 'palabra1'){
                    fondo_p1.color('#A08958');
                }else if(arr_palabras[0] == 'palabra2'){
                    fondo_p2.color('#A08958');
                }else if(arr_palabras[0] == 'palabra3'){
                    fondo_p3.color('#A08958');
                }else if(arr_palabras[0] == 'palabra4'){
                    fondo_p4.color('#A08958');
                }
                puntaje += 1;
                victoria();
                activarBotones();
                vaciarArray(arr_palabras);
                vaciarArray(arr_botSelec);
                vaciarArray(arr_tapas);
            }else{
                //Crafty.log('--- '+arr_tapas.length);
                arr_tapas.forEach(elemento => {
                    //Crafty.log(elemento);
                    setTimeout(function(){
                        eval(elemento+".visible = true;");
                    }, 1000)
                });
                arr_botSelec.forEach(elem => {
                    setTimeout(function(){
                        eval(elem+".addComponent('Mouse');");
                    }, 1000)
                });
                setTimeout(function(){
                    activarBotones();
                }, 1000)
                vaciarArray(arr_palabras);
                vaciarArray(arr_botSelec);
                vaciarArray(arr_tapas);
            }
        }
    }

    p1.bind('Click', function(MouseEvent){
        p1.removeComponent('Mouse');
        botSelec('palabra1', 'p1', 'tapa1');
    })

    p2.bind('Click', function(MouseEvent){
        p2.removeComponent('Mouse');
        botSelec('palabra1', 'p2', 'tapa2');
    })

    p3.bind('Click', function(MouseEvent){
        p3.removeComponent('Mouse');
        botSelec('palabra2', 'p3', 'tapa3');
    })

    p4.bind('Click', function(MouseEvent){
        p4.removeComponent('Mouse');
        botSelec('palabra2', 'p4', 'tapa4');
    })

    p5.bind('Click', function(MouseEvent){
        p5.removeComponent('Mouse');
        botSelec('palabra3', 'p5', 'tapa5');
    })

    p6.bind('Click', function(MouseEvent){
        p6.removeComponent('Mouse');
        botSelec('palabra3', 'p6', 'tapa6');
    })

    p7.bind('Click', function(MouseEvent){
        p7.removeComponent('Mouse');
        botSelec('palabra4', 'p7', 'tapa7');
    })

    p8.bind('Click', function(MouseEvent){
        p8.removeComponent('Mouse');
        botSelec('palabra4', 'p8', 'tapa8');
    })

    // ======= Contador de tiempo =======

    contadorTiempo();

    function contadorTiempo(n){
        tj2 = 0;
        tiempoDisp = setInterval(function(){
            tj2 = tj2 + 1;
            //Crafty.log('var t: '+tj2);
            tiempo2.text('Tiempo Transcurrido: '+tj2+'s');
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

Crafty.scene('ini3', function(){

    Crafty.e("2D, Canvas, Image").attr({ x: 0, y: 0 }).image('/core/img/fondo2.png');

    Crafty.e("2D, Canvas, pn3").attr({x:230, y:80});
    let botonJugar = Crafty.e("2D, Canvas, Mouse, Image").image('/core/img/btnJugar.png').attr({x:360, y:380});

    botonJugar.bind('Click', function(MouseEvent){
        Crafty.log('Inicio Nivel 3');
        //Crafty.scene('nivel3');
        Crafty.scene('nivel3');
    })

});

Crafty.scene('nivel3', function(){

    Crafty.e("2D, Canvas, Image").attr({ x: 0, y: 0 }).image('/core/img/fondo2.png');
    Crafty.e("2D, Canvas, Image").attr({ x: 80, y:90 }).image('/core/img/fondo_juego3.png');
    Crafty.e("2D, Canvas, Image").attr({ x: 80, y:460 }).image('/core/img/pasto.png');

    let tiempo3 = Crafty.e("2D, Canvas, Text").attr({x: 720, y: 30}).text('Tiempo Transcurrido: 0s')
        .textColor('#AAA')
        .textFont({ size: '30px', family: 'solano_gothic_mvb_stdBd' });

    Crafty.e("2D, Canvas, Text").attr({x: 80, y: 520}).text('* Selecciona la primera y la ultima letra de la palabra que has encontrado')
        .textColor('#FFF')
        .textFont({ size: '16px' });

    Crafty.e("2D, Canvas, Text").attr({ x: 700, y: 120 }).text("ENCUENTRA LAS PALABRAS:")
        .textColor('#FFF')
        .textFont({ size: '24px', family: 'solano_gothic_mvb_stdBd' });

    let fondo_btn1 = Crafty.e("2D, Canvas, Color").attr({ x:700, y:160, w:199, h:41 }).color('#FFF');
    let fondo_btn2 = Crafty.e("2D, Canvas, Color").attr({ x:700, y:211, w:199, h:41 }).color('#FFF');
    let fondo_btn3 = Crafty.e("2D, Canvas, Color").attr({ x:700, y:262, w:199, h:41 }).color('#FFF');
    let fondo_btn4 = Crafty.e("2D, Canvas, Color").attr({ x:700, y:313, w:199, h:41 }).color('#FFF');
    let fondo_btn5 = Crafty.e("2D, Canvas, Color").attr({ x:700, y:364, w:199, h:41 }).color('#FFF');

    Crafty.e("2D, Canvas, Text").attr({ x: 720, y: 171 }).text("U-PLANNER")
        .textColor('#000')
        .textFont({ size: '24px', family: 'solano_gothic_mvb_stdBd' });

    Crafty.e("2D, Canvas, Text").attr({ x: 720, y: 223 }).text("INTRANET EPG")
        .textColor('#000')
        .textFont({ size: '24px', family: 'solano_gothic_mvb_stdBd' });

    Crafty.e("2D, Canvas, Text").attr({ x: 720, y: 274 }).text("AULA VIRTUAL")
        .textColor('#000')
        .textFont({ size: '24px', family: 'solano_gothic_mvb_stdBd' });

    Crafty.e("2D, Canvas, Text").attr({ x: 720, y: 325 }).text("MIS TRAMITES")
        .textColor('#000')
        .textFont({ size: '24px', family: 'solano_gothic_mvb_stdBd' });

    Crafty.e("2D, Canvas, Text").attr({ x: 720, y: 375 }).text("BIBLIOTECA")
        .textColor('#000')
        .textFont({ size: '24px', family: 'solano_gothic_mvb_stdBd' });

    // ======= Areas activas =======

    let vaa1 = 0;
    let vaa2 = 0;
    let vaa3 = 0;
    let vaa4 = 0;
    let vaa5 = 0;
    let vaa6 = 0;
    let vaa7 = 0;
    let vaa8 = 0;
    let vaa9 = 0;
    let vaa10 = 0;

    let aa1 = Crafty.e("2D, Canvas, Mouse, Color").attr({ x: 80, y:90, w: 42, h: 42 });
    let aa2 = Crafty.e("2D, Canvas, Mouse, Color").attr({ x: 530, y:90, w: 42, h: 42 });

    let aa3 = Crafty.e("2D, Canvas, Mouse, Color").attr({ x: 125, y:135, w: 42, h: 42 });
    let aa4 = Crafty.e("2D, Canvas, Mouse, Color").attr({ x: 530, y:135, w: 42, h: 42 });

    let aa5 = Crafty.e("2D, Canvas, Mouse, Color").attr({ x: 80, y:225, w: 42, h: 42 });
    let aa6 = Crafty.e("2D, Canvas, Mouse, Color").attr({ x: 530, y:225, w: 42, h: 42 });

    let aa7 = Crafty.e("2D, Canvas, Mouse, Color").attr({ x: 80, y:314.7, w: 42, h: 42 });
    let aa8 = Crafty.e("2D, Canvas, Mouse, Color").attr({ x: 530, y:314.7, w: 42, h: 42 });

    let aa9 = Crafty.e("2D, Canvas, Mouse, Color").attr({ x: 574.7, y:90, w: 42, h: 42 });
    let aa10 = Crafty.e("2D, Canvas, Mouse, Color").attr({ x: 574.7, y:405, w: 42, h: 42 });

    // ======= Palabras =======

    let pal1 = Crafty.e("2D, Canvas, Image").attr({ x: 80, y:90 }).image('/core/img/pal1.png');
    let pal2 = Crafty.e("2D, Canvas, Image").attr({ x: 125, y:135 }).image('/core/img/pal2.png');
    let pal3 = Crafty.e("2D, Canvas, Image").attr({ x: 80, y:225 }).image('/core/img/pal3.png');
    let pal4 = Crafty.e("2D, Canvas, Image").attr({ x: 80, y:315 }).image('/core/img/pal4.png');
    let pal5 = Crafty.e("2D, Canvas, Image").attr({ x: 574.7, y:90 }).image('/core/img/pal5.png');

    pal1.visible = false;
    pal2.visible = false;
    pal3.visible = false;
    pal4.visible = false;
    pal5.visible = false;

    // ========================

    aa1.bind('Click', function(MouseEvent){
        vaa1 = 1;
        activ_palabras();
    });
    aa2.bind('Click', function(MouseEvent){
        vaa2 = 1;
        activ_palabras();
    });
    aa3.bind('Click', function(MouseEvent){
        vaa3 = 1;
        activ_palabras();
    });
    aa4.bind('Click', function(MouseEvent){
        vaa4 = 1;
        activ_palabras();
    });
    aa5.bind('Click', function(MouseEvent){
        vaa5 = 1;
        activ_palabras();
    });
    aa6.bind('Click', function(MouseEvent){
        vaa6 = 1;
        activ_palabras();
    });
    aa7.bind('Click', function(MouseEvent){
        vaa7 = 1;
        activ_palabras();
    });
    aa8.bind('Click', function(MouseEvent){
        vaa8 = 1;
        activ_palabras();
    });
    aa9.bind('Click', function(MouseEvent){
        vaa9 = 1;
        activ_palabras();
    });
    aa10.bind('Click', function(MouseEvent){
        vaa10 = 1;
        activ_palabras();
    });

    function activ_palabras(){
        if(vaa1 == 1 && vaa2 == 1){
            pal1.visible = true;
            fondo_btn4.color('#A08958');
            aa1.removeComponent('Mouse');
            aa2.removeComponent('Mouse');
            verifJ3Completo();
        }
        if(vaa3 == 1 && vaa4 == 1){
            pal2.visible = true;
            fondo_btn5.color('#A08958');
            aa3.removeComponent('Mouse');
            aa4.removeComponent('Mouse');
            verifJ3Completo();
        }
        if(vaa5 == 1 && vaa6 == 1){
            pal3.visible = true;
            fondo_btn3.color('#A08958');
            aa5.removeComponent('Mouse');
            aa6.removeComponent('Mouse');
            verifJ3Completo();
        }
        if(vaa7 == 1 && vaa8 == 1){
            pal4.visible = true;
            fondo_btn2.color('#A08958');
            aa7.removeComponent('Mouse');
            aa8.removeComponent('Mouse');
            verifJ3Completo();
        }
        if(vaa9 == 1 && vaa10 == 1){
            pal5.visible = true;
            fondo_btn1.color('#A08958');
            aa9.removeComponent('Mouse');
            aa10.removeComponent('Mouse');
            verifJ3Completo();
        }
    }

    function verifJ3Completo(){
        if(vaa1 == 1 && vaa2 == 1 && vaa3 == 1 && vaa4 == 1 && vaa5 == 1 && vaa6 == 1 && vaa7 == 1 && vaa8 == 1 && vaa9 == 1 && vaa10 == 1 ){
        Crafty.log('Tiempo final: '+tj3);
        clearInterval(tiempoDisp);
            setTimeout(function(){
                Crafty.scene('ini4');
            }, 1500)
        }
    }

    // ======= Contador de tiempo =======

    contadorTiempo();

    function contadorTiempo(){
        tj3 = 0;
        tiempoDisp = setInterval(function(){
            tj3 = tj3 + 1;
            Crafty.log('var t: '+tj3);
            tiempo3.text('Tiempo Transcurrido: '+tj3+'s');
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

Crafty.scene('ini4', function(){

    Crafty.e("2D, Canvas, Image").attr({ x: 0, y: 0 }).image('/core/img/fondo2.png');

    Crafty.e("2D, Canvas, pn4").attr({x:230, y:80});
    let botonJugar = Crafty.e("2D, Canvas, Mouse, Image").image('/core/img/btnJugar.png').attr({x:360, y:380});

    botonJugar.bind('Click', function(MouseEvent){
        Crafty.scene('nivel4');
    })

});

Crafty.scene('nivel4', function(){

    let resp_completas = 0;

    Crafty.e("2D, Canvas, Image").attr({ x: 0, y: 0 }).image('/core/img/fondo2.png');

    Crafty.e("2D, Canvas, Text").attr({ x: 290, y: 40 }).text("ASOCIA LOS CONCEPTOS")
        .textColor('#FFF')
        .textFont({ size: '56px', family: 'solano_gothic_mvb_stdBd' });

    Crafty.e("2D, Canvas, gra1")
        .attr({x: 231, y:55});

    Crafty.e("2D, Canvas, gra1")
        .attr({x: 720, y:55});

    let tiempo4 = Crafty.e("2D, Canvas, Text").attr({x: 720, y: 100}).text('Tiempo Transcurrido: 0s')
        .textColor('#AAA')
        .textFont({ size: '30px', family: 'solano_gothic_mvb_stdBd' });

    var opciones = {
        maxParticles: 150,
        size: 18,
        sizeRandom: 4,
        speed: 1,
        speedRandom: 1.2,
        // Lifespan in frames
        lifeSpan: 29,
        lifeSpanRandom: 7,
        // Angle is calculated clockwise: 12pm is 0deg, 3pm is 90deg etc.
        angle: 0,
        angleRandom: 34,
        startColour: [255, 131, 0, 1],
        startColourRandom: [48, 50, 45, 0],
        endColour: [245, 35, 0, 0],
        endColourRandom: [60, 60, 60, 0],
        // Only applies when fastMode is off, specifies how sharp the gradients are drawn
        sharpness: 20,
        sharpnessRandom: 10,
        // Random spread from origin
        spread: 10,
        // How many frames should this last
        duration: -1,
        // Will draw squares instead of circle gradients
        fastMode: false,
        gravity: { x: 0, y: -0.05 },
        // sensible values are 0-3
        jitter: 0,
        // Offset for the origin of the particles
        originOffset: {x: 25, y: 50}
        };

    Crafty.e("2D, Canvas, Particles")
        .attr({ x: 220, y:10, w: 50, h: 50 })
        //.addComponent('WiredMBR')
        .particles(opciones);

    Crafty.e("2D, Canvas, Particles")
        .attr({ x: 710, y:10, w: 50, h: 50 })
        //.addComponent('WiredMBR')
        .particles(opciones);

    let btn11 = Crafty.e("2D, Canvas, Color").attr({x: 100, y: 140, w: 285, h: 57}).color('#FFF');
    let btn21 = Crafty.e("2D, Canvas, Color").attr({x: 100, y: 217, w: 285, h: 57}).color('#FFF');
    let btn31 = Crafty.e("2D, Canvas, Color").attr({x: 100, y: 294, w: 285, h: 57}).color('#FFF');
    let btn41 = Crafty.e("2D, Canvas, Color").attr({x: 100, y: 371, w: 285, h: 57}).color('#FFF');
    let btn51 = Crafty.e("2D, Canvas, Color").attr({x: 100, y: 448, w: 285, h: 57}).color('#FFF');

    Crafty.e("2D, Canvas, Text").attr({x: 120, y: 155}).text("U-PLANNER")
        .textColor("#000")
        .textFont({ size: "36px", family: "solano_gothic_mvb_stdBd" });

    Crafty.e("2D, Canvas, Text").attr({x: 120, y: 232}).text("INTRANET POSTGRADO")
        .textColor("#000")
        .textFont({ size: "36px", family: "solano_gothic_mvb_stdBd" });

    Crafty.e("2D, Canvas, Text").attr({x: 120, y: 309}).text("AULA VIRTUAL")
        .textColor("#000")
        .textFont({ size: "36px", family: "solano_gothic_mvb_stdBd" });

    Crafty.e("2D, Canvas, Text").attr({x: 120, y: 386}).text("MIS TRAMITES")
        .textColor("#000")
        .textFont({ size: "36px", family: "solano_gothic_mvb_stdBd" });

    Crafty.e("2D, Canvas, Text").attr({x: 120, y: 463}).text("BIBLIOTECAS")
        .textColor("#000")
        .textFont({ size: "36px", family: "solano_gothic_mvb_stdBd" });

    let btn12 = Crafty.e("2D, Canvas, Color").attr({x: 590, y: 140, w: 325, h: 57}).color('#FFF');
    let btn22 = Crafty.e("2D, Canvas, Color").attr({x: 590, y: 217, w: 325, h: 57}).color('#FFF');
    let btn32 = Crafty.e("2D, Canvas, Color").attr({x: 590, y: 294, w: 325, h: 57}).color('#FFF');
    let btn42 = Crafty.e("2D, Canvas, Color").attr({x: 590, y: 371, w: 325, h: 57}).color('#FFF');
    let btn52 = Crafty.e("2D, Canvas, Color").attr({x: 590, y: 448, w: 325, h: 57}).color('#FFF');

    Crafty.e("HTML")
        .attr({x:620, y:151, w:280, h:42})
        .css({'background-color': 'transparent', 'font-size': '18px', 'color': '#00F', 'font-family': 'solano_gothic_mvb_stdBd'})
        .append("Consulta tus pendientes y tus comprobantes electronicos.");

    Crafty.e("HTML")
        .attr({x:620, y:228, w:280, h:42})
        .css({'background-color': 'transparent', 'font-size': '18px', 'color': '#00F', 'font-family': 'solano_gothic_mvb_stdBd'})
        .append("Realiza todos los tramites y monitorea su estado.");

    Crafty.e("HTML")
        .attr({x:620, y:305, w:280, h:42})
        .css({'background-color': 'transparent', 'font-size': '18px', 'color': '#00F', 'font-family': 'solano_gothic_mvb_stdBd'})
        .append("O centros de informacion con las bases de datos mas completas.");

    Crafty.e("HTML")
        .attr({x:620, y:392, w:280, h:42})
        .css({'background-color': 'transparent', 'font-size': '18px', 'color': '#00F', 'font-family': 'solano_gothic_mvb_stdBd'})
        .append("O Blackboard. Accede a tus clases online.");

    Crafty.e("HTML")
        .attr({x:620, y:460, w:280, h:42})
        .css({'background-color': 'transparent', 'font-size': '18px', 'color': '#00F', 'font-family': 'solano_gothic_mvb_stdBd'})
        .append("Revisa tus notas de cursos, asistencia y realiza reservas.");

    // ***********************************************************************
    // ***                                                                 ***
    // ***    zonaActiva es solo para fines referenciales de desarrollo    ***
    // ***                                                                 ***
    // ***********************************************************************

    // Crafty.c('zonaActiva',{
    //     init: function(){
    //         this.addComponent('2D, DOM, Color');
    //     }
    // });

    // Crafty.e('zonaActiva')
    //     .attr({
    //         w: 2, h:2 , x: 590, y:476
    //     })
    //     .color('red');

    // ***********************************************************
    // *** para testear colisiones usar:                       ***
    // ***                                                     ***
    // *** Componentes: WiredHitBox, SolidHitBox               ***
    // ***                                                     ***
    // *** Metodos:                                            ***
    // *** .debugFill("purple")                                ***
    // *** .debugStroke("blue")                                ***
    // ***********************************************************

    let pos1 = [370, 142]; // Posicion inicial de la pelota
    let pos2 = [370, 219]; // Posicion inicial de la pelota
    let pos3 = [370, 296]; // Posicion inicial de la pelota
    let pos4 = [370, 373]; // Posicion inicial de la pelota
    let pos5 = [370, 450]; // Posicion inicial de la pelota

    let pelota1 = Crafty.e("2D, DOM, Draggable, btnJ4, Collision")
        // .debugFill("purple")
        // .debugStroke("blue")
        //.origin('center')
        .attr({ w: 53, h: 53, x:pos1[0], y:pos1[1] })
        .collision(27, 0,    45, 8,    53, 25,    48, 43,    28,53,    8,44,    1, 27,    6,10)
        .bind('StopDrag', function(evt) {
            //Crafty.log('x: '+this.x+' y: '+this.y);

            if(this.isAt(590, 476)){
                this.x = 560;
                this.y = 450;
                pelota1.removeComponent('Draggable');
                btn11.color('#A08958');
                btn52.color('#A08958');
                resp_completas += 1;
                verifJ4Completo();
            }else{
                this.x = pos1[0];
                this.y = pos1[1];
            }
        });
        // .bind('Dragging', function(evt) {
        //     this.color("black");
        // });

    let pelota2 = Crafty.e("2D, DOM, Draggable, btnJ4, Collision")
        // .debugFill("purple")
        // .debugStroke("blue")
        //.origin('center')
        .attr({ w: 53, h: 53, x:pos2[0], y:pos2[1] })
        .collision(27, 0,    45, 10,    52, 25,    47, 42,    27,52,    8,44,    1, 27,    6,10)
        .bind('StopDrag', function(evt) {
            //Crafty.log('x: '+this.x+' y: '+this.y);

            if(this.isAt(590, 168)){
                this.x = 560;
                this.y = 142;
                pelota2.removeComponent('Draggable');
                btn21.color('#A08958');
                btn12.color('#A08958');
                resp_completas += 1;
                verifJ4Completo();
            }else{
                this.x = pos2[0];
                this.y = pos2[1];
            }
        });
        // .bind('Dragging', function(evt) {
        //     this.color("black");
        // });

    let pelota3 = Crafty.e("2D, DOM, Draggable, btnJ4, Collision")
        // .debugFill("purple")
        // .debugStroke("blue")
        //.origin('center')
        .attr({ w: 53, h: 53, x:pos3[0], y:pos3[1] })
        .collision(27, 0,    45, 10,    52, 25,    47, 42,    27,52,    8,44,    1, 27,    6,10)
        .bind('StopDrag', function(evt) {
            //Crafty.log('x: '+this.x+' y: '+this.y);

            if(this.isAt(590, 399)){
                this.x = 560;
                this.y = 373;
                pelota3.removeComponent('Draggable');
                btn31.color('#A08958');
                btn42.color('#A08958');
                resp_completas += 1;
                verifJ4Completo();
            }else{
                this.x = pos3[0];
                this.y = pos3[1];
            }
        });
        // .bind('Dragging', function(evt) {
        //     this.color("black");
        // });



    let pelota4 = Crafty.e("2D, DOM, Draggable, btnJ4, Collision")
        // .debugFill("purple")
        // .debugStroke("blue")
        //.origin('center')
        .attr({ w: 53, h: 53, x:pos4[0], y:pos4[1] })
        .collision(27, 0,    45, 10,    52, 25,    47, 42,    27,52,    8,44,    1, 27,    6,10)
        .bind('StopDrag', function(evt) {
            //Crafty.log('x: '+this.x+' y: '+this.y);

            if(this.isAt(590, 245)){
                this.x = 560;
                this.y = 219;
                pelota4.removeComponent('Draggable');
                btn41.color('#A08958');
                btn22.color('#A08958');
                resp_completas += 1;
                verifJ4Completo();
            }else{
                this.x = pos4[0];
                this.y = pos4[1];
            }
        });
        // .bind('Dragging', function(evt) {
        //     this.color("black");
        // });



    let pelota5 = Crafty.e("2D, DOM, Draggable, btnJ4, Collision")
        // .debugFill("purple")
        // .debugStroke("blue")
        //.origin('center')
        .attr({ w: 53, h: 53, x:pos5[0], y:pos5[1] })
        .collision(27, 0,    45, 10,    52, 25,    47, 42,    27,52,    8,44,    1, 27,    6,10)
        .bind('StopDrag', function(evt) {
            //Crafty.log('x: '+this.x+' y: '+this.y);

            if(this.isAt(590, 322)){
                this.x = 560;
                this.y = 296;
                pelota5.removeComponent('Draggable');
                btn51.color('#A08958');
                btn32.color('#A08958');
                resp_completas += 1;
                verifJ4Completo();
            }else{
                this.x = pos5[0];
                this.y = pos5[1];
            }
        });
        // .bind('Dragging', function(evt) {
        //     this.color("black");
        // });

    // ======= Verificar Juego Completo =======

    function verifJ4Completo(){
        if(resp_completas >= 5){
            Crafty.log('Tiempo final: '+tj4);
            clearInterval(tiempoDisp);
            setTimeout(function(){
                //Crafty.scene('ini2');
                Crafty.log('Juego 4 Completo...');
                Crafty.log('Tiempos totales: '+tj1+' | '+tj2+' | '+tj3+' | '+tj4);
            }, 1500)
        }
    }

    // ======= Contador de tiempo =======

    contadorTiempo();

    function contadorTiempo(){
        tj4 = 0;
        tiempoDisp = setInterval(function(){
            tj4 = tj4 + 1;
            Crafty.log('var t: '+tj4);
            tiempo4.text('Tiempo Transcurrido: '+tj4+'s');
        }, 1000);
    }

    // ======= Boton Salir =======

    // *** Nota: Los graficos han sido pre-cargados en la primera escena ***

    btnSalir = Crafty.e("2D, Canvas, Mouse, botSalir").attr({x:700, y:520});
    btnSalirPres = Crafty.e("2D, Canvas, botSalirPres").attr({x:700, y:520});
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

Crafty.scene('test-attach', function(){
//
    Crafty.background('#000');

    let gra1 = Crafty.e("2D, Canvas, Color, Keyboard")
        .attr({x: 30, y: 30, w:20, h:20})
        .color('#0F0')
        .bind('KeyDown', function(e) {
            if (e.key == Crafty.keys.LEFT_ARROW) {
                data1();
                this.x -= 10;
            } else if (e.key == Crafty.keys.RIGHT_ARROW) {
                data1();
                this.x += 10;
            } else if (e.key == Crafty.keys.UP_ARROW) {
                data1();
                this.y -= 10;
            } else if (e.key == Crafty.keys.DOWN_ARROW) {
                data1();
                this.y += 10;
            }
        });

    function data1(){
        Crafty.log('X: '+gra1.x+ ' Y: '+gra1.y);
    }

    let gra2 = Crafty.e("2D, Canvas, Color")
        .attr({x: 0, y: 0, w:20, h:20})
        //.attr({x: gra1.x, y: gra1.y, w:20, h:20})
        //.attr({w:20, h:20})
        .color('#0FF')

    gra1.attach(gra2);
});

Crafty.scene('ini1');
//Crafty.scene('nivel2');
//Crafty.scene('test-attach');