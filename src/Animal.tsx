import * as React from "react";
import { Animal } from "./models/index";

const AnimalHeader = (props: { headerTitle: string }) => {
    const { headerTitle } = props;
    return <div>{headerTitle}</div>
}

interface AnimalProps{
    species: string;
}

export class AnimalComponent extends React.Component<AnimalProps, { editSpecies: string }>{
    constructor(props: AnimalProps) {
        super(props);
        this.state = { editSpecies: this.props.species };
    }

    updateSpeciesValue = (evt: any): void => {
        this.setState({ editSpecies: evt.target.value });
        console.log(this.props.species);
    }

    render() {
        let div: JSX.Element;
        div = <div className="col-md-6">
            <span>Hello, {this.props.species}</span>
        </div>;
        return <div>
            <div className="row">
                <input value={this.state.editSpecies} onChange={this.updateSpeciesValue} />
                {this.state.editSpecies}
            </div>
            <div className="row">
                <AnimalHeader headerTitle={'Welcome to see ' + this.state.editSpecies} />
            </div>
        </div>;
    }
}