let products = [];
let editId = null;

function saveProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const category = document.getElementById("productCategory").value;
  const image = document.getElementById("productImage").value;
  const description = document.getElementById("productDescription").value;

  if (!name || !price) {
    alert("Vui lòng nhập tên và giá sản phẩm.");
    return;
  }

  const product = {
    id: editId ?? Date.now(),
    name,
    price,
    category,
    image,
    description
  };

  if (editId) {
    products = products.map(p => p.id === editId ? product : p);
    editId = null;
  } else {
    products.push(product);
  }

  renderProducts();
  resetForm();
}

function renderProducts() {
  const table = document.getElementById("productTable");
  table.innerHTML = "";

  products.forEach(product => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.category}</td>
      <td><img src="${product.image}" alt=""></td>
      <td>
        <button class="action-btn delete-btn" onclick="deleteProduct(${product.id})">Xóa</button>
        <button class="action-btn edit-btn" onclick="editProduct(${product.id})">Sửa</button>
      </td>
    `;

    table.appendChild(row);
  });
}

function deleteProduct(id) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
    products = products.filter(p => p.id !== id);
    renderProducts();
  }
}

function editProduct(id) {
  const product = products.find(p => p.id === id);
  document.getElementById("productName").value = product.name;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productCategory").value = product.category;
  document.getElementById("productImage").value = product.image;
  document.getElementById("productDescription").value = product.description;
  editId = id;
}

function resetForm() {
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productCategory").value = "";
  document.getElementById("productImage").value = "";
  document.getElementById("productDescription").value = "";
  editId = null;
}
