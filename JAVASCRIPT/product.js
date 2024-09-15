function addItem() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let rate = document.getElementById("rate").value;
    let description = document.getElementById("description").value;
    let available = document.getElementById("available").checked ? '<i class="fa-solid fa-check text-success"></i>' : '<i class="fa-solid fa-x text-danger"></i>'
    document.getElementById("products").innerHTML += ` <tr><td>${name}</td>
            <td>${price}</td>
            <td>${category}</td>
            <td>${rate}</td>
            <td>${description}</td>
            <td>${available}</td>
            </tr>`;
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("description").value = "";
    document.getElementById("available").value = "";
}