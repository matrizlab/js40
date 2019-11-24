const Card = ({ avatar_url, html_url, name, public_repos, bio }) => {
  return `
    <div class="box">
      <article class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img src="${avatar_url}"  />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
              <a href="${html_url}"><strong>${name}</strong></a>
                <small>Public Repository:</small> <small><strong>${public_repos}</strong></small>
                <br>
                ${bio ? `Bio: ${bio}` : ""}
              </p>
          </div>
          <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="reply">
                  <span class="icon is-small">
                    <i class="fas fa-star" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>   
        </article>
      </div>
  `;
};

export default Card;
