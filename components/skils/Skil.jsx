import { technologies } from "../general/Tecnologi";
import DevIcon from "../general/DevIcons";

export const Thol = () => (
    <div className="technologies-wrapper">
        {" "}
        {technologies.map((item) => {
            return <DevIcon name={item} key={item} />;
        })}
    </div>
);
