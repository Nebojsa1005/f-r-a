const { createContext } = require("react");

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item ) => {},
    removeItem: () => {}
})

export default CartContext