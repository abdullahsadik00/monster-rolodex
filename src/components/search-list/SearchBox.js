import { Component } from "react";
import './SearchBox.css'
class SearchBox extends Component{
    render(){
        return(
            <input     className='search-box'
            placeholder="search Monster" onChange={this.props.onChange} />
            )
    }

}
export default SearchBox;
