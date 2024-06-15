import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";
import "../LostFigures.css"

interface LostFiguresProps {
    title: string;
    figures: Figure[];
}

const LostFiguresComponent: FC<LostFiguresProps> = ({title,figures}) => {
    figures.map(figure => console.log(figure));
    return (
        <div className="lostFigures">
            <h3>{title}</h3>
            <div className="figuresContainer">
                {figures.map((figure: Figure) =>
                    <div key={figure.id} className="figure">
                        {figure.logo && figure.name && <img src={figure.logo} alt={figure.name}/>}
                        {figure.name}
                    </div>)}
            </div>
        </div>
    );
};

export default LostFiguresComponent;