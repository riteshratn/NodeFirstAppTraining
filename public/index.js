fetch('/films')
            .then(response => response.json())
            .then(data => {
                const filmsList = document.getElementById('films-list');
                data.results.forEach(film => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `Title: ${film.title}, Director: ${film.director}, Release Date: ${film.release_date}`;
                    filmsList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error(error);
            });