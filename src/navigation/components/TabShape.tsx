import {curveBasis, line} from 'd3-shape';
import Svg, {Path} from 'react-native-svg';
import { TAB_BAR_HEIGHT, DEVICE } from '@/constants/dimentions';





const lineGenerator = line();

const rect = lineGenerator([
    [0, 0],
    [0, 0],
    [DEVICE.width / 2, 0],
    [DEVICE.width, 0],
    [DEVICE.width, TAB_BAR_HEIGHT],
    [0, TAB_BAR_HEIGHT],
    [0, TAB_BAR_HEIGHT],
    [0, 0],
]);

const center = lineGenerator.curve(curveBasis)([
    [(DEVICE.width / 5) * 2 - 10, 0],
    [(DEVICE.width / 5) * 2, TAB_BAR_HEIGHT * 0.05],
    [(DEVICE.width / 5) * 2 + 20, TAB_BAR_HEIGHT * 0.5],
    [(DEVICE.width / 5) * 3 - 20, TAB_BAR_HEIGHT * 0.5],
    [(DEVICE.width / 5) * 3 , TAB_BAR_HEIGHT * 0.05],
    [(DEVICE.width / 5) * 3 + 10 , 0],
]);

const left = lineGenerator.curve(curveBasis)([
    [0, TAB_BAR_HEIGHT ],
    [0, 0],
    [TAB_BAR_HEIGHT , 0],
    [0, 0],
  ])

  const right = lineGenerator.curve(curveBasis)([
    [DEVICE.width - TAB_BAR_HEIGHT , 0],
    [DEVICE.width, 0],
    [DEVICE.width, TAB_BAR_HEIGHT ],
    [DEVICE.width, 0],
  ])

const d = ` ${right} ${center} ${rect} ${left}`;

export default function TabShape() {
    return (
        <Svg width={DEVICE.width} height={TAB_BAR_HEIGHT}>
            <Path fill="white" {...{d}} />
        </Svg>
    );
}