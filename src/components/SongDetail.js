import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
	return (
		<div>
			<h3>Now playing</h3>
			<div>{song.title}</div>
			<div>{song.duration}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);