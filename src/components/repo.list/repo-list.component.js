import { Component } from "react";

import './repo-list.styles.css';
import RepoCard from '../repo-card/repocard.component';

class RepoList  extends Component{
    render(){

        const { repos } = this.props;

        return (
            <div className='repo-list'>

            {repos.map((repo) =>{

            return <RepoCard  repo={ repo } />;
            
            }
        )} 
        
        </div>
        );
    }
}
export default RepoList;