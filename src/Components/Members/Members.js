import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Members.css';

const Members = () => {
    const [members,setMembers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./developers.json')
        .then(res=>res.json())
        .then(data=> setMembers(data));
    },[]);

    const handleHireMe = member => {
        const newCart = [...cart, member];
        setCart(newCart);
    }
    return (
        <div className="team-container">
             <div className="team-members">
             {
                 members.map(member =><Developer 
                    key={member.key}
                    member={member}
                    handleHireMe ={handleHireMe}
                    ></Developer>)
             }
             </div>

             <div className="cart">
                <Cart cart={cart}></Cart>
             </div>
        </div>
    );
};

export default Members;