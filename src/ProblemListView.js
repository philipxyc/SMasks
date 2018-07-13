import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MdIconStarBorder from 'material-ui/svg-icons/toggle/star-border';
import MdIconStar from 'material-ui/svg-icons/toggle/star';
import MdIconNaturePeople from 'material-ui/svg-icons/image/nature-people';
import MdIconMoto from 'material-ui/svg-icons/action/motorcycle';
import MdIconDirectRun from 'material-ui/svg-icons/maps/directions-run';
import MdIconDirectWalk from 'material-ui/svg-icons/maps/directions-walk';
import {yellow500} from 'material-ui/styles/colors';


class ProblemListView extends React.Component {
	render() {
		var res = [];

		for (let i = 0, l = this.props.problemList.length; i < l; i++) {
			let item = this.props.problemList[i];
			let primaryText, secondaryText, leftIcon, rightAvatar;

			if (item.type === 0) {
				primaryText = 'Cycling';
				secondaryText = 'Place: Century Park';
				leftIcon = <MdIconMoto />;
				rightAvatar = <div><MdIconStar  color={yellow500}/><MdIconStarBorder color={yellow500}/><MdIconStarBorder /></div>;
			} else if (item.type === 1) {
				primaryText = 'Marathon';
				secondaryText = 'Place: People Square';
				leftIcon = <MdIconDirectRun />;
				rightAvatar = <div><MdIconStar  color={yellow500}/><MdIconStarBorder /><MdIconStarBorder /></div>;				
			} else if (item.type === 2) {
				primaryText = 'Hiking';
				secondaryText = 'Place: Putuo Mountain';
				leftIcon = <MdIconNaturePeople />;
				rightAvatar = <div></div>;
			} else if (item.type === 3) {
				primaryText = 'Jogging together!';
				secondaryText = 'Place: Shanghaitech Campus';
				leftIcon = <MdIconDirectWalk />;
				rightAvatar = <div></div>;
			} else {
				return;
			}

			if (typeof primaryText !== 'undefined' && typeof secondaryText !== 'undefined' && typeof leftIcon !== 'undefined' && typeof rightAvatar !== 'undefined') {
				res.push((
					<ListItem
						key={i}
						primaryText = {primaryText}
						secondaryText = {secondaryText}
						leftIcon = {leftIcon}
						rightAvatar = {rightAvatar}
						
					/>
				));
			}
		}

		return (
			<List>{res}</List>
		);
	}
}

export default ProblemListView;
