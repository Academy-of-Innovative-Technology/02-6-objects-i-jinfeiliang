let Staff_List_DOM = document.querySelector("#staff-container")



var theranos = {
  first: "Elizabeth",
  last: "Holmes",
  year: 1984,
  college: ["St. John University", "Stanford University"],
  img: "https://startupi.com.br/wp-content/uploads/2023/08/20160711elizabeth-holmes.jpg",
  wiki: "https://en.wikipedia.org/wiki/Elizabeth_Holmes",
};

function Load_Person(Person_Data) {
  let Template = `      <article class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 shadow-sm text-center">
          <img
            src="${Person_Data.img}"
            class="card-img-top"
            alt="Staff member portrait"
          />

          <div class="card-body">
            <h5 class="card-title">${Person_Data.first} ${Person_Data.last}</h5>
            <p class="card-text text-muted">Age: ${2005 - Person_Data.year}</p>
            <p class="small">
              - Education - 
            </p>
          </div>

          <div class="card-footer bg-white">
            <a href="${Person_Data.wiki}" class="btn btn-outline-primary btn-sm">View Profile</a>
          </div>
        </div>
      </article>`;
	Staff_List_DOM.insertAdjacentHTML("beforeend", Template);
}
