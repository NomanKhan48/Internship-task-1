import React from 'react';
import { View } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

const RoundProgressBar = ({ progress, size, strokeWidth, backgroundColor, progressColor }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressStrokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressStrokeDashoffset}
          fill="transparent"
        />
      </Svg>
    </View>
  );
};

export default RoundProgressBar;
