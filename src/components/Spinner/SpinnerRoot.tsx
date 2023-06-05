import CircleDotSpinner, { CircleDotProps } from "./CircleDotSpinner";
import BumpSpinner, { BumpSpinnerProps } from "./BumpSpinner";
import MaterialSpinner, { MaterialSpinnerProps } from "./MaterialSpinner";

type SpinnerType = 'circleDot' | 'bump' | 'material';
type SpinnerProps = MaterialSpinnerProps | BumpSpinnerProps | CircleDotProps;

interface SpinnerRootProps<T extends SpinnerProps> {
  spinner: SpinnerType;
  args: T;
}

export default function SpinnerRoot<T extends SpinnerProps>({ spinner, ...args }: SpinnerRootProps<T>): any {
  if (spinner === 'circleDot') {
    return <CircleDotSpinner {...args as CircleDotProps} />;
  }
  if (spinner === 'bump') {
    return <BumpSpinner {...args as BumpSpinnerProps} />;
  }
  if (spinner === 'material') {
    return <MaterialSpinner {...args as MaterialSpinnerProps} />;
  }
  return null
}
