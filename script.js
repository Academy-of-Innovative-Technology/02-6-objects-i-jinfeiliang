let Staff_List_DOM = document.querySelector("#staff-container");

let Staff_List = [
  {
    first: "Elizabeth",
    last: "Holmes",
    year: 1984,
    college: ["St. John University", "Stanford University"],
    img: "https://startupi.com.br/wp-content/uploads/2023/08/20160711elizabeth-holmes.jpg",
    wiki: "https://en.wikipedia.org/wiki/Elizabeth_Holmes",
  },
  {
    first: "Elon",
    middle: "Revee",
    last: "Musk",
    age: 48,
    college: [
      "Queens College",
      "Stanford University",
      "Wharton School of the University of Pennsylvania",
    ],
    img: "https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg",
    wiki: "https://en.wikipedia.org/wiki/Elon_Musk",
  },
  {
    first: "Dwayne",
    middle: "Douglas",
    last: "Johnson",
    year: 1972,
    awards: [
      "2001 Teen Choice Award-Film - Choice Sleazebag: Winner",
      "2026 Golden Globe-Best Performance by a Male Actor in a Motion Picture - Drama: nominated",
    ],
    citizenship: ["United States", "Canada"],
    hometown: "Hayward, California",
    movies: ["Black Adam", "Jumanji", "Baywatch"],

    college: ["University of Miami"],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dwayne_Johnson-1809_%28cropped%29.jpg/250px-Dwayne_Johnson-1809_%28cropped%29.jpg",
    wiki: "https://en.wikipedia.org/wiki/Dwayne_Johnson",
  },
];

function Load_Person(Person_Data) {
  let awards;
  if (Person_Data.awards) {
    awards = `<p class="small">- Awards -</p><ul>${Person_Data.awards
      .map((award) => `<li>${award}</li>`)
      .join("")}</ul>`;
  }

  let movies;
  if (Person_Data.movies) {
    movies = `<p class="small">- Movies -</p><ul>${Person_Data.movies
      .map((movie) => `<li>${movie}</li>`)
      .join("")}</ul>`;
  }

  let citizenships;
  if (Person_Data.citizenship) {
    citizenships = `<p class="small">- Citizenships -</p><ul>${Person_Data.citizenship
      .map((citizenship) => `<li>${citizenship}</li>`)
      .join("")}</ul>`;
  }

  let hometown;
  if (Person_Data.hometown) {
    hometown = `<p class="small">- Hometown -</p><p>${Person_Data.hometown}</p>`;
  }

  let Template = `      <article class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 shadow-sm text-center">
          <img
            src="${Person_Data.img}"
            class="card-img-top"
            alt="Staff member portrait"
          />

          <div class="card-body">
            <h5 class="card-title">${Person_Data.first} ${
    Person_Data.middle || ""
  } ${Person_Data.last}</h5>
            <p class="card-text text-muted">Age: ${
              Person_Data.age || new Date().getFullYear() - Person_Data.year
            }</p>
            <p class="small">
              - Education - 
              ${Person_Data.college
                .map((Education) => `<span class="d-block">${Education}</span>`)
                .join("")}
            </p>
          ${hometown || ""}
          ${citizenships || ""}
          ${movies || ""}
          ${awards || ""}
          </div>

          <div class="card-footer bg-white">
            <a href="${
              Person_Data.wiki
            }" class="btn btn-outline-primary btn-sm">View Profile</a>
          </div>
        </div>
      </article>`;
  Staff_List_DOM.insertAdjacentHTML("beforeend", Template);
}

Staff_List.forEach((Staff) => {
  Load_Person(Staff);
});
