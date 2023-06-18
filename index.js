
    const url = ' http://3.17.216.66:4000/location'; 

    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const dataContainer = document.getElementById('data-container');
        data.forEach((item) => {
          const headItem = document.createElement('h2');
          const listItem = document.createElement('p');
          headItem.textContent = item.state;
          listItem.textContent = item.location_name; // Modify this based on your data structure
          dataContainer.appendChild(headItem);
          dataContainer.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
 