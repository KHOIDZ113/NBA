

db.collection("shoes").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const shoe = doc.data()
        const card = document.createElement("div");
        card.className = "shoe-card";
        card.innerHTML = `
    <img src="${shoe.image}" alt="${shoe.name}">
    <div class="shoe-info">
      <h3>${shoe.name}</h3>
      <p>${shoe.price}</p>
    </div>
  `;
        card.addEventListener("click", () => {
            localStorage.setItem("selectedShoe", JSON.stringify(shoe));
            window.location.href = "shoedetail.html";
        });
        shoeList.appendChild(card);
        console.log(`${doc.id} => ${doc.data().first} ${doc.data().last}`);
    });
});


