let Product = function (name,price) {
    this.index = 0;
    this.name = name;
    this.price = price;

    this.getInfo = function () {
        return " Index " + this.index + " : "+ " product " + this.name + " has price is " + this.price + " $ ";
    };
    this.editProduct = function (name,price) {
        this.name = name;
        this.price = price;
    }

};


