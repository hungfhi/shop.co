import React, { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import apis from '../api/apis'
function InitComponent() {
    const user_info = useSelector(state => state.user_info, shallowEqual)

    useEffect(() => {
        if (user_info && user_info?.accessToken) {
            apis.getProduct().then(result => {
                console.log("result", result)
            }).catch(err => {
                console.log("err")
            })
        }

    }, [user_info])
}
export default InitComponent