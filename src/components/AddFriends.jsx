import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddFriends = () => {
    const [data, setdata] = useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName": "",
            "DescribeYourFriend": ""
        })
        const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })

    }
    const readvalue=() => {
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("success")

                } else {
                    alert("error")

                }
            }
        ).catch().finally()
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form label">name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form label">friendname</label>
                            <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form label">friendnickname</label>
                            <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form label">describeyourfriend</label>
                            <input type="text" className="form-control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFriends