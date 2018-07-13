import React from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import MdIconCake from 'material-ui/svg-icons/social/cake';
import MdIconSchool from 'material-ui/svg-icons/social/school';
import MdIconStars from 'material-ui/svg-icons/action/stars';
import MdIconFlashOn from 'material-ui/svg-icons/image/flash-on';
import MdIconAllOut from 'material-ui/svg-icons/action/all-out';
import MdIconHistory from 'material-ui/svg-icons/action/history';
import MdIconChangeHistory from 'material-ui/svg-icons/action/change-history';
import yuehaoavatar from './assets/avatar.png';


class UserProfile extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader
					title='Xiao Ming'
					subtitle='Better air quality, better life!'
					avatar={yuehaoavatar}
				/>
				<CardMedia>
					<div>
						<List>
							<Divider />
							<ListItem
								key={0}
								insetChildren={true}
								primaryText='December 6th'
								leftIcon={<MdIconCake />}
							/>
							<Divider />
							<ListItem
								key={2}
								insetChildren={true}
								primaryText={
									<div style={{display: 'flex', flexWrap: 'wrap'}}>
										<Chip style={{marginRight: 7}}>Travelling</Chip>
										<Chip style={{marginRight: 7}}>Cycling</Chip>
									</div>
								}
								leftIcon={<MdIconStars />}
							/>
							<Divider />
							<ListItem
								key={4}
								insetChildren={true}
								primaryText='Total exercising time: 53hr'
								leftIcon={<MdIconAllOut />}
							/>
							<Divider />
							<ListItem
								key={5}
								insetChildren={true}
								primaryText='History'
								leftIcon={<MdIconHistory />}
								nestedItems={[
									<ListItem
										key={0}
										primaryText='Cycling'
										secondaryText = 'Time: July 12th'
										leftIcon={<MdIconChangeHistory />}
									/>,
									<ListItem
										key={1}
										primaryText='Jogging'
										secondaryText = 'Time: July 10th'
										leftIcon={<MdIconChangeHistory />}
									/>
								]}
							/>
							<Divider />
						</List>
					</div>
				</CardMedia>
				<CardActions>
					<FlatButton label='Modify Information' />
				</CardActions>
			</Card>
		);
	}
}

export default UserProfile;
