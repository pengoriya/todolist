import React, { Component } from 'react'

export default class   extends Component {
    render() {
        const { item, handleChange,handleSubmit,editItem} = this.props;
        return <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book" />
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className="form-control text-capitalize" 
                        placeholder="add a todo item"
                        value={item}
                        onChange={handleChange}
                     />
                </div>
                <button type="submit" 
                className =
                {
                    editItem ? "btn btn-block btn-success my-3" :
                    "btn btn-block btn-primary my-3"
                }
                >
                   {editItem ? "Edit Item" : "Add Item"} 
                </button>
            </form>

        </div>;
        
    }
}
