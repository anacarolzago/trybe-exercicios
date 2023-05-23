const purchaseData = {
    items: [
      { name: 'Item 1', price: 10 },
      { name: 'Item 2', price: 20 },
      { name: 'Item 3', price: 30 },
    ],
    // discount: 0.1, // 10% de desconto
  };
  
  const addItem = (nameItem, priceItem, discountItem) => {
    purchaseData.items.push({ name : nameItem, price: priceItem });
  }
  
  const addDiscount = (discountTotal) => {
    purchaseData['discount'] = discountTotal;
  }
  
  const getTotal = (purchaseData) => {
    let total = 0;
    
    for (const item of purchaseData.items) {
      total += item.price;
    }
  
    return total;
  }
  
  /* 
    Função addDiscount: verificar se após chamá-la, haverá uma KEY com nome discount dentro de purchaseData
  */
  
  module.exports = { addItem, addDiscount, getTotal, purchaseData };