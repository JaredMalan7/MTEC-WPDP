const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

const productTable = $('#product-table');

$.each(storeItems, function(index){
    if(this.inStock){
        const price = $('<div>').addClass('price').text(`$${this.price}`);
        const product = $('<div>').addClass('product');
        const name = $('<div>').addClass('name').text(this.name);
        const details = $('<div>').addClass('details').text(this.details);
        // const inStock = $('<div>').addClass('inStock').text(this.inStock);
        product.append(price, name, details);
        productTable.append(product);

        $('#darkMode').click(function(){
            $('body').toggleClass('black-bg');
            $('div.product').toggleClass('dark-bg');
            $('h1').toggleClass('white-font')
            $('button.toggle-btn').toggleClass('dark-btn')
    });
    
    }
});

