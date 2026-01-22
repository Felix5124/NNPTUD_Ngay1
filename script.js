// Câu 1:
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2:
const products = [
    new Product(1, "Bánh mì", 15000, 10, "Thực phẩm", true),
    new Product(2, "Sữa tươi", 8000, 5, "Thực phẩm", true),
    new Product(3, "Ốp lưng", 50000, 0, "Accessories", true),
    new Product(4, "Cáp sạc", 120000, 20, "Accessories", true),
    new Product(5, "iPhone 15", 32000000, 2, "Điện thoại", true),
    new Product(6, "Tai nghe", 4500000, 15, "Accessories", false)
];

// Câu 3:
const nameAndPrice = [];
for (let i = 0; i < products.length; i++) {
    const item = { name: products[i].name, price: products[i].price };
    nameAndPrice.push(item);
}
console.log("Câu 3:", nameAndPrice);

// Câu 4: 
const conHang = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].quantity > 0) {
        conHang.push(products[i]);
    }
}
console.log("Câu 4:", conHang);

// Câu 5:
let coSanPhamDat = false;
for (let i = 0; i < products.length; i++) {
    if (products[i].price > 30000000) {
        coSanPhamDat = true;
        break; 
    }
}
console.log("Câu 5:", coSanPhamDat);

// Câu 6: 
let accessoriesDangBanHet = true;
for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Accessories") {
        if (products[i].isAvailable === false) {
            accessoriesDangBanHet = false;
            break;
        }
    }
}
console.log("Câu 6:", accessoriesDangBanHet);

// Câu 7:
let tongTien = 0;
for (let i = 0; i < products.length; i++) {
    tongTien += (products[i].price * products[i].quantity);
}
console.log("Câu 7 - Tổng tiền kho:", tongTien);

// Câu 8:
console.log("Câu 8:");
for (const p of products) {
    let trangThai = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${trangThai}`);
}

// Câu 9:
console.log("Câu 9:");
const sp1 = products[0];
for (const key in sp1) {
    console.log(`${key}: ${sp1[key]}`);
}

// Câu 10: 
const tenSpOk = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].isAvailable && products[i].quantity > 0) {
        tenSpOk.push(products[i].name);
    }
}
console.log("Câu 10:", tenSpOk);