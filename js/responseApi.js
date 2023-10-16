const responseApi = () => {
  fetch(
    "https://randomuser.me/api/?results=7&nat=BR,MX&inc=name,location,email,phone,picture,nat"
  )
    .then((res) => res.json())
    .then((data) => renderData(data.results))
    .catch((err) => console.error(err));
};

const renderData = (data) => {
  const dataContainer = document.getElementById("data-container");

  data.map((user) => {
    const userElement = document.createElement("div");
    userElement.innerHTML = `
        <img src="${user.picture.large}" alt="User Image">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p> <strong>Email: </strong> ${user.email}</p>
            <p> <strong>Tel: </strong> ${user.phone}</p>
            <h4> ${user.location.state}, ${user.location.country}  </h4>
            
        `;
    dataContainer.appendChild(userElement);
  });
};

responseApi();
