import { Component } from "react";
import { Helmet } from "react-helmet";
import './repo.styles.css';

class RepoCard extends Component {



    render() {
        const { id, name, language, description,
            stargazers_count,
            fork, created_at,
            git_tags_url,
            git_commits_url,
            push,
            updated_at
        } = this.props.repo;
        return (


            <div className='repo-container' key={id}>

                <img alt={`repo ${name}`}
                    src={`
                    https://api.dicebear.com/5.x/bottts/svg/${id}?seed=Whiskers
             `}
                //   https://api.dicebear.com/5.x/bottts/svg/${id}?seed=Whiskers
                //  https://robohash.org/1?set=set2
                //   https://api.dicebear.com/5.x/bottts/svg/${id}?seed=Whiskers
                />


                <h2>{name}</h2>
                <p>{language}</p>
                <p>{description}</p>
                <p>{stargazers_count}</p>
                <p>{fork}</p>
                <p>{created_at}</p>
               
                
        


           <Helmet>

           
           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
           </Helmet>


           <p>
  
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    More
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
            <p> more list here:</p>
  
    <ul id='listing'>
                <li>${git_tags_url}</li>
                <li>${git_commits_url}</li>
                <li>${push}</li>
                <li>${updated_at}</li>
                </ul>
  </div>
</div>
           

            </div>



        )
    }

}

export default RepoCard;

