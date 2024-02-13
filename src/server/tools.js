module.exports = {
  createEmailTemplate: function (data) {
    const itemsHTML = data.cart.map((el) => {
      const item = el.item;
      return `<div id=${item.id} style="display: flex; border: 1px solid black; margin-bottom: 10px, padding: 5px;">
                  <div style="background-image: url(${item.image}); height: 150px; width: 100px; background-position: center; background-repeat: no-repeat; background-size: contain;"></div>
                  <div style=" padding: 10px;">
                    <div>
                      <h4>${item.title}</h4>
                    </div>
                    <div>
                        <h4>${item.price} x ${el.quantity}pcs = ${el.priceCurrentPosition}₴</h4>
                    </div>
                  </div>
                  <hr>
                </div>`;
    });

    const combinedHTML = `<div style="max-width: 600px; padding: 5px; margin: auto"> 
    <h2 style="text-align: center">Studiopresto</h2>
    <h3>Total: ${data.totalPrice}₴</h3>
    <h3 style="text-align: right">${data.email}</h3>
    <h3 style="text-align: right">${data.phone}</h3>
    <h3 style="text-align: right">${data.name}</h3>

    ${itemsHTML.join("")}
    <h2 style="text-align: center">Thank you!</h2></div>`;
    return combinedHTML;
  },
};
