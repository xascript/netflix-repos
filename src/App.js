
import './App.css';
import { Component } from 'react';
import RepoList from './components/repo.list/repo-list.component';
import SearchBox from './components/search-box/search-box.component';


class App extends Component{
  constructor(){
    super();

    this.state ={
      //names
      repos:[],
      searchField:'',

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

onSearchChange = (event)=>{
  console.log(event.target.value);

  const searchField = event.target.value.toLocaleLowerCase();

  this.setState(()=>{
    return { searchField };
  }
  );
};

  render(){

    const{ repos, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredRepos = this.state.repos.filter((repo)=>{
      return repo.name.toLocaleLowerCase().includes(this.state.searchField);
    });

return(
    <div className='App'>
     
      <SearchBox 
      className='repos-ssearch-box'
      onChangeHandler={ onSearchChange } 
      placeholder={'search repositories'}
   />
      <RepoList  repos={ filteredRepos }/>
    </div>
);
    }
}
export default App;