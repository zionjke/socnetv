import React from "react";

class ProfileStatus extends React.Component {

    state = {
        isEditMode: false,
        status:this.props.status
    };


    deactivatedEditMode = () => {
        this.setState({
            isEditMode: false
        });
        this.props.updateUserStatus(this.state.status)
    };

    activatedEditMode = () => {
        this.setState({
            isEditMode: true
        })
    };

    onStatusChanged = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    render() {
        return (
            <>
                {!this.state.isEditMode &&
                    <div onClick={this.activatedEditMode}>
                        {this.props.status}
                    </div>
                }
                {this.state.isEditMode &&
                    <div>
                        <input autoFocus={true}
                               value={this.state.status}
                               onBlur={this.deactivatedEditMode}
                                onChange={this.onStatusChanged}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus