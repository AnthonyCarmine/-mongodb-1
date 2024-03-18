db.users.insertMany([
    {
      nombres: "julian",
      apellidos: "perez",
      correo: "julian@gmail.com",
      ciudad: "New york",
      pais: "EEUU",
      salario_dlls: 1000,
      edad: 20,
      altura_cm: 175,
      peso_libra: 150,
    },
    {
      nombres: "Camila",
      apellidos: "Rodríguez",
      correo: "camila@gmail.com",
      ciudad: "Bogotá",
      pais: "Colombia",
      salario_dlls: 3000,
      edad: 45,
      altura_cm: 160,
      peso_libra: 130,
    },
    {
      nombres: "Andrés",
      apellidos: "González",
      correo: "andres@hotmail.com",
      ciudad: "Toronto",
      pais: "Canada",
      salario_dlls: 4800,
      edad: 28,
      altura_cm: 180,
      peso_libra: 170,
    },
    {
      nombres: "Valentina",
      apellidos: "López",
      correo: "valentina@yahoo.com",
      ciudad: "Venecia",
      pais: "Italia",
      salario_dlls: 1500,
      edad: 22,
      altura_cm: 185,
      peso_libra: 120,
    },
    {
      nombres: "Santiago",
      apellidos: "Martínez",
      correo: "santiago@gmail.com",
      ciudad: "Paris",
      pais: "Francia",
      salario_dlls: 3100,
      edad: 30,
      altura_cm: 175,
      peso_libra: 155,
    },
    {
      nombres: "Laura",
      apellidos: "Gómez",
      correo: "laura@hotmail.com",
      ciudad: "Rio de janeiro",
      pais: "Brasil",
      salario_dlls: 4000, 
      edad: 27,
      altura_cm: 155,
      peso_libra: 110,
    },
    {
      nombres: "David",
      apellidos: "Hernández",
      correo: "david@yahoo.com",
      ciudad: "Buenos aires",
      pais: "Argentina",
      salario_dlls: 950,
      edad: 24,
      altura_cm: 170,
      peso_libra: 150,
    },
    {
      nombres: "María",
      apellidos: "García",
      correo: "maria@gmail.com",
      ciudad: "Maipu",
      pais: "Chile",
      salario_dlls: 4000, 
      edad: 23, 
      altura_cm: 160,
      peso_libra: 135,
    },
    {
      nombres: "Carlos",
      apellidos: "Rojas",
      correo: "carlos@hotmail.com",
      ciudad: "Guadalajara",
      pais: "Mexico",
      salario_dlls: 2500, 
      edad: 23,
      altura_cm: 175,
      peso_libra: 155,
    },
    {
      nombres: "Ana",
      apellidos: "Pérez", 
      ciudad: "Berlin",
      pais: "Alemania",
      salario_dlls: 1500, 
      edad: 29,
      altura_cm: 165,
      peso_libra: 125,
    },
    {
      nombres: "Elena",
      apellidos: "Moreno",
      correo: "elena@example.com",
      ciudad: "Londres",
      pais: "Reino Unido",
      salario_dlls: 2800,
      edad: 32,
      altura_cm: 182,
      peso_libra: 160,
    },
    {
      nombres: "Giuseppe",
      apellidos: "Rossi",
      correo: "giuseppe@example.com",
      ciudad: "Roma",
      pais: "Italia",
      salario_dlls: 2200,
      edad: 27,
      altura_cm: 175,
      peso_libra: 145,
    },
    {
      nombres: "Lucía",
      apellidos: "Fernández",
      ciudad: "París",
      pais: "Francia",
      salario_dlls: 3200,
      edad: 28,
      altura_cm: 168,
      peso_libra: 125,
    },
    {
      nombres: "Rafael",
      apellidos: "Santos",
      correo: "rafael@example.com",
      ciudad: "Buenos Aires",
      pais: "Argentina",
      salario_dlls: 1800,
      edad: 24,
      altura_cm: 170,
      peso_libra: 135,
    },
    {
      nombres: "Priya",
      apellidos: "Patel",
      ciudad: "Mumbai",
      pais: "India",
      edad: 31,
      altura_cm: 160,
      peso_libra: 115,
    },
    {
        nombres: "Octavio",
        apellidos: "Mesa",
        ciudad: "roma",
        pais: "España",
        salario_dlls: 3200,
        edad: 31,
        altura_cm: 160,
        peso_libra: 115,
      },
      {
        nombres: "juanito",
        apellidos: "jaramillo",
        ciudad: "sidney",
        pais: "Australia",
        salario_dlls: 3200,
        edad: 31,
        altura_cm: 160,
        peso_libra: 150,
      },
      {
        nombres: "peranito",
        apellidos: "montoya",
        ciudad: "Berlin",
        pais: "ALemania",
        salario_dlls: 4200,
        edad: 45,
        altura_cm: 160,
        peso_libra: 150,
      },
      {
        nombres: "Eduardo",
        apellidos: "Martinez",
        ciudad: "Medellin",
        pais: "Colombia",
        salario_dlls: 4200,
        edad: 45,
        altura_cm: 160,
        peso_libra: 150,
      },
      {
        nombres: "Maicol",
        apellidos: "Martinez",
        ciudad: "Toronto",
        pais: "Canada",
        salario_dlls: 3200,
        edad: 45,
        altura_cm: 190,
        peso_libra: 150,
      },
  ]);

  
  db.users.drop();

/* 1.Obtener todos los usuarios que sean mayores de 18 años. */
db.users.find({edad:{$gt:18}});



/* 2.Obtener todos los usuarios que sean de Londres o de París. */
db.users.find({ciudad:{$in:["Londres","París"]}});



/* 3.Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años. */
db.users.find({$and:[
{salario_dlls:{$gt:2000}},
{edad:{$lt:30}}
]});



/* 4.Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes. */
db.users.find({$and:[
{pais:"España"},
{salario_dlls:{$gt:3000}},
]});



/* 5.Obtener todos los usuarios que tengan entre 25 y 35 años. */
db.users.find({$and:[
{edad:{$gt:25}},
{edad:{$lt:35}}
]});



/* 6.Obtener a todos los usuarios que no sean de Estados Unidos. */
db.users.find({pais:{$ne:"EEUU"}});



/* 7.Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años. */
db.users.find({$and:[
{ciudad:"Londres"},
{$or:[
{salario_dlls:{$gt:2500}},
{edad:{$gt:30}}
]}
]});



/* 8.Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras. */
db.users.find({$and:[
{pais:"Australia"},
{peso_libra:{$gt:140}}
]});



/* 9.Obtener a todos los usuarios que no sean de Londres ni de París. */
db.users.find({ciudad:{$nin:["Londres","París"]}});



/* 10.Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años. */
db.users.find({$or:[
{salario_dlls:{$lt:2000}},
{edad:{$gt:40}}
]})



/* 11.Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm */
db.users.find({$and:[
{pais:"Canada"},
{$or:[{salario_dlls:{$gt:4000}},
{altura_cm:{$gt:180}}]}
]});



/* 12.Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años. */
db.users.find({
    $and: [
        { pais: "Italia" },
        { edad: { $gte: 20 } },
        { edad: { $lte: 30 } }
    ]
});


db.users.find()



/* 13.Obtener todos los usuarios que no tengan un correo electrónico registrado. */
db.users.find({correo:{$exists:false}});


/* 14.Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes. */
db.users.find({
    $and:[
        {pais:"Francia"},
        {salario_dlls:{$gte:3000}},
    {salario_dlls:{$lte:5000}}
]});//revisar



/* 15.Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras. */
db.users.find({$and:[{pais:"Brasil"},
{$or:[{peso_libra:{$lt:120}},
{peso_libra:{$gt:140}}]}]});




/* 16.Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años. */
db.users.find({$and:[{edad:{$lt:25}},{$or:[{pais:"Argentina"},{pais:"Chile"}]}]});



/* 17.Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes. */
db.users.find({$and:[{pais:{$nin:["España","Mexico"]}},
{salario_dlls:{$lt:3000}}]});



/* 18.Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años. */
db.users.find({$and:[{pais:"Alemania"},
{$or:[{salario_dlls:{$lt:4000}},
{edad:{$gt:35}}]}]});



/* 19.Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm. */
db.users.find({$and:[{pais:"Colombia"},{altura_cm:{$lt:170}}]});



/* 20.Obtener todos los usuarios que sean de India y que no tengan un salario registrado. */
db.users.find({$and:[{pais:"India"},{salario_dlls:{$exists:false}}]});
