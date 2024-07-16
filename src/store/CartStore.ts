import { create } from 'zustand';

// came from api restfull
const initialProdutcs = [
    {
        id: 101,
        name: "Smartphone X",
        description: "Smartphone de última geração com tela AMOLED de 6.5 polegadas, câmera tripla de 48MP e 128GB de armazenamento interno.",
        price: 3299.00
      },
      {
        id: 102,
        name: "Notebook Pro",
        description: "Notebook potente com processador Intel Core i7, 16GB de RAM, SSD de 512GB e tela de 15.6 polegadas.",
        price: 6499.00
      },
      {
        id: 103,
        name: "Tablet A",
        description: "Tablet leve e portátil com tela de 10.1 polegadas, 4GB de RAM e 64GB de armazenamento interno.",
        price: 1299.00
      },
      {
        id: 104,
        name: "Smartwatch Z",
        description: "Smartwatch com monitoramento de saúde, GPS integrado, resistência à água e até 10 dias de bateria.",
        price: 899.00
      },
      {
        id: 105,
        name: "Fone de Ouvido Bluetooth",
        description: "Fones de ouvido Bluetooth com cancelamento de ruído ativo, som de alta qualidade e até 20 horas de reprodução.",
        price: 499.00
      }
]

type Item = {
    id: number;
    name: string;
    description: string;
    price: number;
}

type CartStore = {
    availableItems: Item[];
    cart: Item[];
    addToCard: (item: Item) => void;
    removeFromCard: (Id: number) => void;
}

export const useCartStore = create<CartStore>((set) => {
    return {
        cart: [],
        availableItems: initialProdutcs,
        addToCard: (item) => {
            set((state) => ({...state, cart: [...state.cart, item] }));
        },
        removeFromCard: (itemId) => {
            set((state) => ({...state, cart: state.cart.filter((i) => i.id!== itemId) }));
        }
    }
})