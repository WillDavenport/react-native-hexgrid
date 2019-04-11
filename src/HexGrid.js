import React, { Component } from 'react';
import Svg from 'react-native-svg';
import PropTypes from 'prop-types';

class HexGrid extends Component {
  static propTypes = {
    width: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
    viewBox: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    width: 800,
    height: 600,
    viewBox: "-50 -50 100 100"
  }

  render() {
    const { width, height, viewBox } = this.props
    return (
      <Svg className="grid" width={width} height={height} viewBox={viewBox}>
        {this.props.children}
      </Svg>
    );
  }
}
export default HexGrid;
