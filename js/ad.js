let products = [];
let editId = null;

function saveProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const color = document.getElementById("productColor").value;
  const size = document.getElementById("productSize").value;
  const status = document.getElementById("productStatus").value;
  const image = document.getElementById("productImage").value;

  console.log(name,price,color,size,status,image)

  if (!name || !price || !color || !size || !status || !image) {
    alert("Vui lòng nhập đầy đủ thông tin sản phẩm");
    return;
  }

  // const product = {
  //   // id: editId ?? Date.now(),
  //   name,
  //   price,
  //   color,
  //   size,
  //   status,
  //   image,
  // };

  // if (editId) {
  //   products = products.map(p => p.id === editId ? product : p);
  //   editId = null;
  // } else {
  //   products.push(product);
  // }

    db.collection("shoes").add({
        name: name,
        price: price,
        color: color,
        size: size,
        status: status,
        image: image,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });


  renderProducts();
  resetForm();
}

function renderProducts() {
  const table = document.getElementById("productTable");
  table.innerHTML = "";

  db.collection("shoes")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const product = doc.data();
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.color}</td>
          <td>${product.size}</td>
          <td>${product.status}</td>
          <td><img src="${product.image}" alt="shoe" width="60"/></td>
          <td>
            <button class="action-btn delete-btn" onclick="deleteProduct('${doc.id}')">Xóa</button>
            <!-- <button class="action-btn edit-btn" onclick="editProduct('${doc.id}')">Sửa</button> -->
          </td>
        `;

        table.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Lỗi khi load dữ liệu:", error);
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
  document.getElementById("productColor").value = "";
  document.getElementById("productSize").value = "";
  document.getElementById("productStatus").value = "";
  document.getElementById("productImage").value = "";
}

renderProducts()
