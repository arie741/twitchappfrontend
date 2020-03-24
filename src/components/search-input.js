import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { apiFetch } from '../actions/api';

const SearchItem = ({text, link, logo = ""}) => {
  return (
      <li><img src={logo} alt=""/><a href={link}>{text}</a></li>
    );
}

const SearchResults = (props) => {
let fetchStatus = props.responseHandle;
  if(fetchStatus.error != null){
    return (
        <div id="error_message">{fetchStatus.payload.stack}</div>
      )
  } else {
    let responsePayload = fetchStatus.payload;
    return (
        <ul id="search_results">
          {responsePayload.data === undefined ? "" : 
              responsePayload.data.channels.map((channel, index) => 
              <SearchItem 
                key={index} 
                text={channel.display_name} 
                link={channel.url}
                logo={channel.logo} />
            )}
        </ul>
      )
  }
}

const SearchInput = (props) => {
  return (
      <input type="text" onChange={event => props.inputHandle(event.target.value)}/>
    )
}

const mapStateToProps = state => {
  return {
    apiResponse: state.apiResponse
  }
}

const mapDispatchToProps = dispatch => {
  const url = "http://localhost:3000";
  return {
    apiRequest: (value) => dispatch(apiFetch(axios.post(url + "/searchchannel", {inputtext: value})))
  }
}

const SearchContainer = (props) => {
  return (
      <div id="search_component">
        <SearchInput inputHandle={props.apiRequest}/>
        <SearchResults responseHandle={props.apiResponse}/>
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);