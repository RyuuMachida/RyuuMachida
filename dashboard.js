const form = document.getElementById("absenForm");
const namaInput = document.getElementById("nama");
const statusInput = document.getElementById("status");
const tableBody = document.querySelector("#absenTable tbody");

let dataAbsen = JSON.parse(localStorage.getItem("dataAbsen")) || [];

function renderTable() {
  tableBody.innerHTML = "";
  dataAbsen.forEach((data, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.nama}</td>
      <td>${data.status}</td>
      <td>
        <button onclick="editAbsen(${index})">Edit</button>
        <button onclick="deleteAbsen(${index})">Hapus</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = namaInput.value.trim();
  const status = statusInput.value;

  if (editIndex === -1) {
    dataAbsen.push({ nama, status });
  } else {
    dataAbsen[editIndex] = { nama, status };
    editIndex = -1;
  }

  localStorage.setItem("dataAbsen", JSON.stringify(dataAbsen));
  form.reset();
  renderTable();
});

let editIndex = -1;

function editAbsen(index) {
  const data = dataAbsen[index];
  namaInput.value = data.nama;
  statusInput.value = data.status;
  editIndex = index;
}

function deleteAbsen(index) {
  if (confirm("Yakin ingin menghapus data ini?")) {
    dataAbsen.splice(index, 1);
    localStorage.setItem("dataAbsen", JSON.stringify(dataAbsen));
    renderTable();
  }
}

renderTable();