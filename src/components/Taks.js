import React, {Component} from 'react';

export default class Tasks extends Component{

    render(){
        return this.props.tasks.map(
            e => <p key={e.id}>
                {e.title} - {e.description} - {e.done} - {e.id}
                <input type="checkbox"/>
                <button>
                    x
                </button>
            </p>
        )
    }
}