let ProductManage = function (name) {
    this.name = name;
    this.products = [];

    this.addProduct = function (product) {
        this.products.push(product);
    };

    this.deleteProduct = function (index) {
        for (let i = 0;i<this.products.length;i++){
            if(this.products[i].index === index){
                this.products.splice(i,1);
            }
        }
    };
    this.getBtnDelete = function (index) {
        return `<button onclick="delProduct(${index})">Delete</button>`
    };
    this.getBtnEdit = function (index) {
        return `<button onclick="editProduct(${index})">Edit</button>`
    }

};