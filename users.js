const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Datos simulados
const usuarios = [
  {
    "id_usuario": "ID-4821",
    "nombre": "Carlos Mendoza",
    "estado_cuenta": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "ID-9314",
    "nombre": "María Fernanda Torres",
    "estado_cuenta": "Vencido",
    "deudas_pendientes": 350.50,
    "fecha_cobro": "2026-11-15"
  },
  {
    "id_usuario": "ID-1058",
    "nombre": "Jorge Luis Andrade",
    "estado_cuenta": "Pendiente",
    "deudas_pendientes": 120.00,
    "fecha_cobro": "2026-11-10"
  },
  {
    "id_usuario": "ID-7462",
    "nombre": "Ana Gabriela Paz",
    "estado_cuenta": "Vencido",
    "deudas_pendientes": 890.25,
    "fecha_cobro": "2026-11-08"
  },
  {
    "id_usuario": "ID-2390",
    "nombre": "Roberto Cedeño",
    "estado_cuenta": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "ID-6543",
    "nombre": "Diana Carolina Vera",
    "estado_cuenta": "Pendiente",
    "deudas_pendientes": 450.00,
    "fecha_cobro": "2026-11-20"
  },
  {
    "id_usuario": "ID-3187",
    "nombre": "Luis Fernando Garcés",
    "estado_cuenta": "Vencido",
    "deudas_pendientes": 1250.75,
    "fecha_cobro": "2026-11-12"
  },
  {
    "id_usuario": "ID-8920",
    "nombre": "Patricia Benítez",
    "estado_cuenta": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "ID-5019",
    "nombre": "Esteban Jaramillo",
    "estado_cuenta": "Pendiente",
    "deudas_pendientes": 275.40,
    "fecha_cobro": "2026-11-25"
  },
  {
    "id_usuario": "ID-1946",
    "nombre": "Valeria Montero",
    "estado_cuenta": "Vencido",
    "deudas_pendientes": 620.00,
    "fecha_cobro": "2026-11-09"
  },
  {
    "id_usuario": "ID-7832",
    "nombre": "Gabriel Zambrano",
    "estado_cuenta": "Pendiente",
    "deudas_pendientes": 150.00,
    "fecha_cobro": "2026-11-18"
  },
  {
    "id_usuario": "ID-4215",
    "nombre": "Sofía Marcela Narváez",
    "estado_cuenta": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "ID-6091",
    "nombre": "Andrés Felipe Macías",
    "estado_cuenta": "Vencido",
    "deudas_pendientes": 980.10,
    "fecha_cobro": "2026-11-14"
  },
  {
    "id_usuario": "ID-2784",
    "nombre": "Lorena Salazar",
    "estado_cuenta": "Pendiente",
    "deudas_pendientes": 310.80,
    "fecha_cobro": "2026-11-22"
  },
  {
    "id_usuario": "ID-9153",
    "nombre": "Mateo Alejandro Hidalgo",
    "estado_cuenta": "Vencido",
    "deudas_pendientes": 540.00,
    "fecha_cobro": "2026-11-11"
  }
];

// Ruta GET que expone el endpoint '/customers'
app.get('/customers', (req, res) => {
  res.json(usuarios);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});