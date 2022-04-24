import { technologies } from "../general/Tecnologi";
import DevIcon from "../general/DevIcons";

const Skils = () => {
    return (
        <>
            <div className="technologies-wrapper">
                {technologies.map((name) => {
                    return <DevIcon name={name} key={name} />;
                })}
            </div>
        </>
    );
};

export default Skils;
