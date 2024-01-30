import React from 'react'

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
  render(){

    const { currentColor, id, type, height, width, data, color } = this.props;
    return (
      <SparklineComponent 
        id={id} 
        height={height} 
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true, format: '${xval} : ${yval}',
        }} 
      dataSource={data} 
      xName='xval' 
      yName='yval' 
      type={type}
    >
      <Inject services={[SparklineTooltip]}/>
  </SparklineComponent>
      
    )

  }
  
}

export default SparkLine
