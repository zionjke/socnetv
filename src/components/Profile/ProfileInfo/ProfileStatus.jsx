import React, {useEffect, useState} from "react";

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


    componentDidUpdate(prevProps,prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <>
                {!this.state.isEditMode &&
                    <div onClick={this.activatedEditMode}>
                        {this.props.status }
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


const ProfileStatusFnc = (props) => {

    const [isEditMode,setisEditMode] = useState(false);
    const [status,setStatus] = useState(props.status);

    const deactivatedEditMode = () => {
        setisEditMode(false);
        props.updateUserStatus(status)
    };

    const activatedMode = () => {
        setisEditMode(true)
    };


    const onStatusChanged = (e) => {
        setStatus(e.currentTarget.value)
    };

    useEffect(() => {
        setStatus(props.status)
    },[props.status]);


    return (
        <>
            {!isEditMode &&
            <div onClick={activatedMode}>
                {props.status ? status : '-------' }
            </div>
            }
            {isEditMode &&
            <div>
                <input autoFocus={true}
                       value={status}
                       onBlur={deactivatedEditMode}
                       onChange={onStatusChanged}/>
            </div>
            }
        </>
    )
};

export default ProfileStatusFnc