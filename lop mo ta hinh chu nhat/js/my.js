let Rectangle = function (length, width, x, y) {
    this.length = length;
    this.width = width;
    this.x = x;
    this.y = y;
    this.getPerimeter = function () {
        return 2 * (length + width);
    };
    this.getArea = function () {
        return length * width;
    };
    this.toString = function (perimeter, area) {
        document.getElementById('abc').innerHTML = 'chu vi la: ' + perimeter + ', dien tich la: ' + area;
    }
};

function show(length,width) {
    let rectangle = new Rectangle(length, width);
    let perimeter = rectangle.getPerimeter();
    let area = rectangle.getArea();
    rectangle.toString(perimeter, area);
}

function creatRectangle(length,width,x,y) {
    let a = document.getElementById('draw');
    let contex = a.getContext('2d');
    let rectangle = new Rectangle(length, width, x, y);
    contex.beginPath();
    contex.fillStyle = "green";
    contex.fillRect(rectangle.x, rectangle.y, rectangle.length, rectangle.width);
    contex.stroke();
}

function display() {
let length = prompt('nhap chieu dai');
let width = prompt('nhap chieu rong');
let x = prompt('nhap khoang cach x');
let y = prompt('nhap khoang cach y');
show(length,width);
creatRectangle(length,width,x,y);
}
display();
