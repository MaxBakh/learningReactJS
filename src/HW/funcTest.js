
import { combineReducers, createStore } from 'redux'
import profileReducer from '../HW/reducer/hwprofileRed'
// import Input from '@material-ui/core/Input';
import { CHANGE_NAME, changeName } from '../HW/action/hwprofile'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useState } from "react";


export default function Profile() {
    const { name } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const setShowName = useCallback(() => {
        // dispatch(toggleshowName);
    }, [dispatch]);

    /////


    const handelChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const setName = useCallback(() => {
        dispatch(changeName(value))
    }, [dispatch, value]);

    return (
        <>
            <div>
                <h4>Profile</h4>
            </div>

            <div>
                <input type="text" value="value" onChange={handelChange} />
            </div>

            <div>
                <button onClick={setName}> Change Name</button>
            </div>

        </>
    );
}

//Добавили поле ввода и кнопку для отправки данных