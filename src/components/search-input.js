import React from 'react';
import { connect } from 'react-redux';
import { apiFetch } from '../actions/api';
import { searchInputPost, inputLink } from '../apicalls/twitchapi';

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
              <li key={index} onClick={() => props.inputPost(channel.url)}>
                <img src={channel.logo} alt=""/>{channel.display_name}
              </li>
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
  return {
    apiRequest: (value) => dispatch(apiFetch(searchInputPost(value))),
    linkInput: (url) => dispatch(apiFetch(inputLink(url)))
  }
}

const SearchContainer = (props) => {
  return (
      <div id="search_component">
        <SearchInput inputHandle={props.apiRequest}/>
        <SearchResults responseHandle={props.apiResponse} inputPost={props.linkInput}/>
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);