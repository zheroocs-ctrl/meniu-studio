export default {
  name: 'produs',
  type: 'document',
  title: 'Produse Meniu',
  fields: [
    { name: 'nume', type: 'string', title: 'Nume Preparat' },
    { name: 'pret', type: 'number', title: 'Preț (RON)' },
    { name: 'descriere', type: 'text', title: 'Descriere / Ingrediente' },
    { name: 'imagine', type: 'image', title: 'Imagine Produs' }
  ]
}
