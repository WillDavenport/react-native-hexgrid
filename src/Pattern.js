import React, { Component } from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import HexUtils from './HexUtils';
import Point from './models/Point';

class Pattern extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    size: PropTypes.object
  };
  static defaultProps = {
    size: new Point(10, 10)
  };

  render() {
    const { id, link, size } = this.props;

    return (
      <Svg.Defs>
        <Svg.Pattern id={id} patternUnits="objectBoundingBox" x={0} y={0} width={size.x} height={size.y}>
          <Svg.Image xlinkHref={link} x={0} y={0} width={size.x*2} height={size.y*2} />
        </Svg.Pattern>
      </Svg.Defs>
    );
  }
}

export default Pattern;
