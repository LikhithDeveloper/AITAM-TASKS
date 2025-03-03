async function fetchNewApiTask() {
  try {
    const response = await fetch(
      "https://fake-json-api.mock.beeceptor.com/users"
    );
    const data = await response.json();
    let main = document.querySelector(".main");
    data.forEach((element) => {
      let { id, name, address, photo } = element;
      if (id == 2) {
        return;
      }
      console.log(photo);
      main.innerHTML += `<div
        style="
          width: 200px;
          height: 250px;
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 5px;
          flex-direction: row;
          display: flex;
          justify-content: start;
          align-items: center;
          flex-direction: column;
          overflow: hidden;
          margin:10px
        "
      >
        <img
          style="width: 200px; height: 150px"
          src="${photo}"
        />
        <h3>${name}</h3>
        <p>${address}</p>
      </div>`;
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchNewApiTask();
