import * as React from "react";
import { Person, User } from "./models/index";
import { ClipLoader } from 'react-spinners';
import axios from 'axios'

export class PersonDiv extends React.Component<Person, { editText: string, users: Array<User> }> {
    private Users: User[];
    private userView: Array<JSX.Element>;

    constructor(props: Person) {
        super(props);
        this.state = { editText: this.props.say, users: []};
        this.getData();
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        let image: JSX.Element;
        image = <img id={this.props.name} src="https://cdn1.iconfinder.com/data/icons/common-guns/48/Paul-39-512.png" width="50"></img>;
        return <div>Hello, {this.props.displayName()}
            {image}
            <input value={this.state.editText} onChange={this.updateInputValue}/>
            <button onClick={(event: React.MouseEvent<HTMLElement>) => {
                this.props.onSayHi()
            }}>Test</button>
            <div className="row">
                <ClipLoader
                    color={'#123abc'}
                    loading={this.state.users.length == undefined || this.state.users.length == 0}
                />
                {this.state.users.map((user, index) => {
                    return <div className="col-md-12" style={{ color: index % 2 == 0 ? 'red' : 'green', backgroundColor: index % 2 == 0 ? 'lightgrey' : 'yellow' }}>{user.email}</div>
                })}
            </div>
        </div>;
    }

    getData = () => {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ users: response.data });                
            });
    }

    updateInputValue = (evt: any): void => {
        this.props.updateSay(evt.target.value);
        this.setState({ editText: evt.target.value });
    }
}