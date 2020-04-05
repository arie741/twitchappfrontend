import React from 'react';
import { connect } from 'react-redux';
import { linksFetch } from '../actions/linkList';
import { getLinkList } from '../apicalls/twitchapi';

class LinkList extends React.Component  {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.linkRequest();
	}

	render() {
		let data = this.props.linkList.payload.data;
		return (
			<div>
				<ul>
					{data === undefined ? "" :
						data.rows.map((channel ,index) => 
						<li key={index}><a href={channel.link}>{channel.link}</a></li>
					)}
				</ul>
			</div>
		)
	}
	
}

const mapStateToProps = state => {
	return {
		linkList: state.linkList
	}
}

const mapDispatchToProps = dispatch => {
  return {
    linkRequest: () => dispatch(linksFetch(getLinkList()))
  }
}

const LinksContainer = props => {
	const { linkList, linkRequest } = props
	return (
			<div id="link_list">
				<LinkList linkList={linkList} linkRequest={linkRequest}/>
			</div>
		)
}


export default connect(mapStateToProps, mapDispatchToProps)(LinksContainer);
