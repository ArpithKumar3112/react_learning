import React from "react";


class UserClass extends React.Component{

    constructor(props){
        super(props);
        //console.log(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Dummy",
                avatar_url:"http://DummyPhote",
                login:"Dummy"
            }
        };
    }

   async componentDidMount(){
        console.log("Child componentDidMount")
        const data=await fetch("https://api.github.com/users/Arpithkumar3112");
        const json=await data.json();
        this.setState({
            userInfo:json,
        })
    }

    render(){
        const {name,location,avatar_url,login}=this.state.userInfo;
        return(
    <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@{login}</h4>
    </div>
        );
    }
}

export default UserClass;