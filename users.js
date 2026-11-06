const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const usuarios = [
  {
    "id_usuario": "ID-4821",
    "nombre": "Carlos Mendoza",
    "saldo_cuenta": 100,
    "estado_deuda": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "ID-9314",
    "nombre": "María Fernanda Torres",
    "saldo_cuenta": 0,
    "estado_deuda": "Vencido",
    "deudas_pendientes": 350.50,
    "fecha_cobro": "2026-11-15"
  },
  {
    "id_usuario": "ID-1058",
    "nombre": "Jorge Luis Andrade",
    "saldo_cuenta": 50,
    "estado_deuda": "Pendiente",
    "deudas_pendientes": 120.00,
    "fecha_cobro": "2026-11-10"
  },
  {
    "id_usuario": "ID-7462",
    "nombre": "Ana Gabriela Paz",
    "saldo_cuenta": 0,
    "estado_deuda": "Vencido",
    "deudas_pendientes": 890.25,
    "fecha_cobro": "2026-11-08"
  },
  {
    "id_usuario": "ID-2390",
    "nombre": "Roberto Cedeño",
    "saldo_cuenta": 439.20,
    "estado_deuda": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "ID-6543",
    "nombre": "Diana Carolina Vera",
    "saldo_cuenta": 200,
    "estado_deuda": "Pendiente",
    "deudas_pendientes": 450.00,
    "fecha_cobro": "2026-11-20"
  },
  {
    "id_usuario": "ID-3187",
    "nombre": "Luis Fernando Garcés",
    "saldo_cuenta": 1045.20,
    "estado_deuda": "Vencido",
    "deudas_pendientes": 1250.75,
    "saldo_cuenta": 1,
    "fecha_cobro": "2026-11-12"
  },
  {
    "id_usuario": "ID-8920",
    "nombre": "Patricia Benítez",
    "saldo_cuenta": 2500,
    "estado_deuda": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "ID-5019",
    "nombre": "Esteban Jaramillo",
    "saldo_cuenta": 0,
    "estado_deuda": "Pendiente",
    "deudas_pendientes": 275.40,
    "fecha_cobro": "2026-11-25"
  },
  {
    "id_usuario": "ID-1946",
    "nombre": "Valeria Montero",
    "saldo_cuenta": 0,
    "estado_deuda": "Vencido",
    "deudas_pendientes": 620.00,
    "fecha_cobro": "2026-11-09"
  },
  {
    "id_usuario": "ID-7832",
    "nombre": "Gabriel Zambrano",
    "saldo_cuenta": 139.45,
    "estado_deuda": "Pendiente",
    "deudas_pendientes": 150.00,
    "fecha_cobro": "2026-11-18"
  },
  {
    "id_usuario": "ID-4215",
    "nombre": "Sofía Marcela Narváez",
    "saldo_cuenta": 769.39,
    "estado_deuda": "Al día",
    "deudas_pendientes": 0.00,
    "fecha_cobro": null
  },
  {
    "id_usuario": "ID-6091",
    "nombre": "Andrés Felipe Macías",
    "saldo_cuenta": 120.34,
    "estado_deuda": "Vencido",
    "deudas_pendientes": 980.10,
    "fecha_cobro": "2026-11-14"
  },
  {
    "id_usuario": "ID-2784",
    "nombre": "Lorena Salazar",
    "saldo_cuenta": 0,
    "estado_deuda": "Pendiente",
    "deudas_pendientes": 310.80,
    "fecha_cobro": "2026-11-22"
  },
  {
    "id_usuario": "ID-9153",
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

  // Si no envían parámetros, devolvemos la lista completa envuelta en un objeto o plana según prefieras (aquí devolvemos el arreglo directo para que coincida con tu referencia de imagen)
  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});