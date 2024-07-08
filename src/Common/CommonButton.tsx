import {Text, TouchableOpacity, Dimensions} from 'react-native';
import {ORANGE_COLOR, MAIN_TEXT_COLOR} from '../Styles/Common/color';
interface ButtonProps {
  label: string;
  onPress?: any;
  disabled?: boolean;
}
const width = Dimensions.get('window');

const CommonButton = ({label, onPress, disabled}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ORANGE_COLOR,
        borderRadius: 8,
      }}
      onPress={onPress}
      disabled={disabled}>
      <Text style={{color: MAIN_TEXT_COLOR, fontSize: 16}}>{label}</Text>
    </TouchableOpacity>
  );
};
export default CommonButton;
