import React from "react";

class ProfileStatus extends React.Component {
    state = {
        isEditMode: false
    };

    toogleEditMode = () => {
     this.setState({
         isEditMode: !this.state.isEditMode
     })
    };

    render() {
        return (
            <>
                {!this.state.isEditMode &&
                    <div onClick={this.toogleEditMode}>
                        {this.props.status}
                    </div>
                }
                {this.state.isEditMode &&
                    <div>
                        <input autoFocus={true}
                               onBlur={this.toogleEditMode}
                               value={this.props.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus