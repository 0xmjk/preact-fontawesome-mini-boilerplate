import {h, Component} from 'preact';

/*
  icon prop looks like
  {
    prefix: "fab",
    iconName: "github",
    icon: [
      width,
      height,
      ligatures,
      unicode,
      svgPathData
    ]
  }
*/

const iconStyle = {
  display: 'inline-block',
  fontSize: 'inherit',
  height: '1em',
  width: '1em',
  overflow: 'hidden',
  verticalAlign: '-.125em'
}

export default function TinyFontAwesomeIcon(props) {
  var { prefix, iconName } = props.icon;
  var [width, height, ligatures, unicode, svgPathData] = props.icon.icon;
  return (<svg aria-hidden="true" focusable="false" data-prefix={prefix} data-icon={iconName} style={iconStyle} role="img" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
    <path fill="currentColor" d={svgPathData}></path>
  </svg>);
}
