const navData = [
  {
    name: 'Inicio',
    path: '/'
  },
  {
    name: 'Dermatología',
    path: '/dermatologia/dermatología'
  },
  {
    name: 'Medicina Estética',
    collection: 'tratamientos',
    sub: [
      {
        name: 'Faciales',
        path: '/medicinaEstetica'
      },
      {
        name: 'Corporales',
        path: '/medicinaEstetica'
      },
      {
        name: 'Láser',
        path: '/medicinaEstetica'
      }
    ]
  },
  {
    name: 'Oficinas',
    collection: 'oficinas',
    sub: [
      {
        name: 'José Luis Bustamante y Rivero',
        path: '/oficinas'
      },
      {
        name: 'León Velarde 311',
        path: '/oficinas'
      },
      {
        name: 'Yanahuara',
        path: '/oficinas'
      }
    ]
  },
  {
    name: 'Contactos',
    path: '/contactos/'
  }
]

export default navData
