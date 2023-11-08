import React from 'react';
import { Flex, Radio } from 'antd';
const baseStyle = {
  width: '25%',
  height: 54,
};
const FlexLay= () => {

  const [value, setValue] = React.useState('horizontal');
  return (
    <>
    <h4>ReactJS Ant-Design Flex Layout Component </h4>
    <Flex gap="middle" vertical>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="horizontal">horizontal</Radio>
        <Radio value="vertical">vertical</Radio>
      </Radio.Group>
      <Flex vertical={value === 'vertical'}>
        {Array.from({
          length: 4,
        }).map((_, i) => (
          <div
            key={i}
            style={{
              ...baseStyle,
              backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf',
            }}
          />
        ))}
      </Flex>
    </Flex>
   </> 
  );
};
export default FlexLay;