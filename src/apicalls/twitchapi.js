import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const searchInputPost = inputText => {
  	return axios.post(url + "/searchchannel", {inputtext: inputText})
}

export const getLinkList = () => {
	return axios.get(url + "/getlinks")
}