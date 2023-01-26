import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();

    this.state ={
      //names
      repos:[],

    };
  }
  componentDidMount(){
    fetch('https://api.github.com/orgs/Netflix/repos')
    .then((response)=>response.json())
    .then((users)=> 
    this.setState(
      ()=>{
      return {repos:users};
    },
    
    () =>{
      console.log(this.state);
    }
    )
    
    )
  }
  render(){
return(
    <div className='App'>
      <input  className='search-box'
      type='search'
      placeholder='search repos'
      onChange={(event)=>{
        console.log(event.target.value);
        const searchString = event.target.value.toLocaleLowerCase();

        const filteredRepos = this.state.repos.filter((repo)=>{
         return repo.name.toLocaleLowerCase().includes(searchString);

        })
        this.setState(()=>{
          return { repos: filteredRepos };
        });
      }}
      />
      {this.state.repos.map((repo) =>{
        return(
          <div key={repo.id}>
            <h1>{repo.name}</h1>
            </div>
        );
      }
      )}
    </div>
);
  }
}
export default App;