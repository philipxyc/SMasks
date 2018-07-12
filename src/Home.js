import React from 'react';
import Paper from 'material-ui/Paper';
import MdIconDoneAll from 'material-ui/svg-icons/action/done-all';
import MdIconCenterFocusWeak from 'material-ui/svg-icons/image/center-focus-weak';
import MdIconEqualizer from 'material-ui/svg-icons/av/equalizer';
import MdIconBattery from 'material-ui/svg-icons/device/battery-30';
import MdIconSnooze from 'material-ui/svg-icons/av/snooze';
import Subheader from 'material-ui/Subheader'
import fig1 from './assets/fig1.png';
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/polar';


class Home extends React.Component {
	// constructor(props) {
	//   super(props);
	//   this.state = {
	//     width: props.width || -1,
	//     height: props.height || -1,
	//   }
	// }

				// <Paper zDepth={1} style={{borderRadius: 8, padding: 5, marginTop: 20, backgroundColor: '#E91E63', color: 'white'}}>
				// 	<Subheader style={{color: 'white'}}>你的段位</Subheader>
				// 	<div style={{paddingTop: 0, paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
				// 		<MdIconEqualizer color='white' style={{width: 50, height: 50}} />
				// 		<span style={{fontSize: 40, float: 'right'}}>白银</span>
				// 	</div>
				// </Paper>

	componentDidMount() {
		// 基于准备好的dom，初始化echarts实例
		var angleChart = echarts.init(document.getElementById('angle'));
		var option = {
			title: { 
            	text: 'Air quality: Inside vs Outside'
        	},
			angleAxis: {
				axisLine: {
					show: false
				}
			},
			radiusAxis: {
				axisLine: {
					show: false
				},
				type: 'category',
				data: ['Inside', 'Outside'],
				z: 10
			},
			color: ["#00B268", "#B21C00"],
			polar: {
			},
			series: [{
				type: 'bar',
				data: [ 14, 0],
				coordinateSystem: 'polar',
				name: 'A',
				stack: 'a'
			}, {
				type: 'bar',
				data: [ 0, 235],
				coordinateSystem: 'polar',
				name: 'B',
				stack: 'a'
			}],
			legend: {
				show: false,
				data: ['A', 'B']
			}
		};        // 绘制图表
		angleChart.setOption(option);

        var barChart = echarts.init(document.getElementById('bar'));
        // 绘制图表
        barChart.setOption({
            title: { 
            	text: 'Workout Trend',
            	textStyle: {
            		color: "#00ABEC"
            	}
        	},
            tooltip: {},
            xAxis: {
                data: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
            },
            yAxis: {},
            color: ["#00ABEC"],
            series: [{
                name: 'Volum of air breathed',
                type: 'bar',
                data: [0, 5, 0, 0, 0, 0, 0, 5, 20, 17, 10, 10, 20, 5, 20, 36, 38, 10, 20, 5, 20, 13, 10, 10, 8]
            }]
        });
    }

	render() {
		return (
			<div style={{padding: 15}}>
				<div id="angle" style={{height: 400}}></div>
				<Paper zDepth={1} style={{borderRadius: 8, padding: 5}}>
					<Subheader>Battery</Subheader>
					<div style={{paddingTop: 0, paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
						<MdIconBattery style={{width: 50, height: 50}} />
						<span style={{fontSize: 40, float: 'right'}}>42% : 63hr</span>
					</div>
				</Paper>

				<div id="bar" style={{height: 400, borderRadius: 8, padding: 10}}></div>

				<Paper zDepth={1} style={{borderRadius: 8, padding: 5, marginTop: 20, backgroundColor: '#03A9F4', color: 'white'}}>
					<Subheader style={{color: 'white'}}>Life of filter</Subheader>
					<div style={{paddingTop: 0, paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
						<span style={{fontSize: 40}}>64.09%</span>
						<MdIconSnooze color='white' style={{width: 50, height: 50, float: 'right'}} />
					</div>
				</Paper>



				<div style={{marginTop: 60}}>
					<h2>Exercise Calendar</h2>
					<img src={fig1} alt='fig1' />
				</div>
			</div>
		);
	}
}

export default Home;
