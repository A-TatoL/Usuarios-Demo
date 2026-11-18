const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const usuarios = [
  {
    "id_usuario": "V-15482103",
    "nombre": "Carlos Mendoza",
    "saldo_cuenta": 100,
    "estado_deuda": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "V-18931412",
    "nombre": "María Fernanda Torres",
    "saldo_cuenta": 0,
    "estado_deuda": "Vencido",
    "deudas_pendientes": 350.50,
    "fecha_cobro": "2026-11-15"
  },
  {
    "id_usuario": "V-11105890",
    "nombre": "Jorge Luis Andrade",
    "saldo_cuenta": 50,
    "estado_deuda": "Pendiente",
    "deudas_pendientes": 120.00,
    "fecha_cobro": "2026-11-10"
  },
  {
    "id_usuario": "V-14746231",
    "nombre": "Ana Gabriela Paz",
    "saldo_cuenta": 0,
    "estado_deuda": "Vencido",
    "deudas_pendientes": 890.25,
    "fecha_cobro": "2026-11-08"
  },
  {
    "id_usuario": "V-20239045",
    "nombre": "Roberto Cedeño",
    "saldo_cuenta": 439.20,
    "estado_deuda": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "V-17654328",
    "nombre": "Diana Carolina Vera",
    "saldo_cuenta": 200,
    "estado_deuda": "Pendiente",
    "deudas_pendientes": 450.00,
    "fecha_cobro": "2026-11-20"
  },
  {
    "id_usuario": "V-13318764",
    "nombre": "Luis Fernando Garcés",
    "saldo_cuenta": 1,
    "estado_deuda": "Vencido",
    "deudas_pendientes": 1250.75,
    "fecha_cobro": "2026-11-12"
  },
  {
    "id_usuario": "V-16892011",
    "nombre": "Patricia Benítez",
    "saldo_cuenta": 2500,
    "estado_deuda": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "V-12501988",
    "nombre": "Esteban Jaramillo",
    "saldo_cuenta": 0,
    "estado_deuda": "Pendiente",
    "deudas_pendientes": 275.40,
    "fecha_cobro": "2026-11-25"
  },
  {
    "id_usuario": "V-19194633",
    "nombre": "Valeria Montero",
    "saldo_cuenta": 0,
    "estado_deuda": "Vencido",
    "deudas_pendientes": 620.00,
    "fecha_cobro": "2026-11-09"
  },
  {
    "id_usuario": "V-15783204",
    "nombre": "Gabriel Zambrano",
    "saldo_cuenta": 139.45,
    "estado_deuda": "Pendiente",
    "deudas_pendientes": 150.00,
    "fecha_cobro": "2026-11-18"
  },
  {
    "id_usuario": "V-18421590",
    "nombre": "Sofía Marcela Narváez",
    "saldo_cuenta": 769.39,
    "estado_deuda": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "V-21609122",
    "nombre": "Andrés Felipe Macías",
    "saldo_cuenta": 120.34,
    "estado_deuda": "Vencido",
    "deudas_pendientes": 980.10,
    "fecha_cobro": "2026-11-14"
  },
  {
    "id_usuario": "V-14278455",
    "nombre": "Lorena Salazar",
    "saldo_cuenta": 0,
    "estado_deuda": "Pendiente",
    "deudas_pendientes": 310.80,
    "fecha_cobro": "2026-11-22"
  },
  {
    "id_usuario": "V-17915302",
    "nombre": "Mateo Alejandro Hidalgo",
    "saldo_cuenta": 456.89,
    "estado_deuda": "Vencido",
    "deudas_pendientes": 540.00,
    "fecha_cobro": "2026-11-11"
  }
];

app.get('/customers', (req, res) => {
  const { id_usuario } = req.query;

  // Si envían un id_usuario en los query params, filtramos el arreglo
  if (id_usuario) {
    const resultado = usuarios.filter(u => u.id_usuario === id_usuario);
    return res.json(resultado);
  }

  // Si no envían parámetros, devolvemos la lista completa
  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});