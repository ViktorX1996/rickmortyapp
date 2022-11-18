import { useId } from "react";

type TMapperProps = {
  ifCheckedDisabled: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selector: string | undefined;
  item: string;
};
const Mapper: React.FunctionComponent<TMapperProps> = (props) => {
  const id = useId();
  return (
    <div id={id} onClick={props.ifCheckedDisabled}>
      <input
        type="radio"
        name={props.item}
        checked={props.selector === props.item}
        onChange={props.onChange}
      />
      <label>{props.item}</label>
    </div>
  );
};
export default Mapper;
