import React, { useState } from 'react';
import './Header.css';
import { FaCarAlt } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';
import { BiXCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [on, setOn] = useState(false);
    const [user] = useAuthState(auth);


    const showMenu = () => {
        setOn(!on);
    }

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div>
            <div className='w-full md:backdrop-blur-sm text-white flex justify-between px-6 py-4 items-center border-b border-white'>

            <div className='text-2xl font-bold text-center '>
                <h1><FaCarAlt className='inline text-blue-500'/> 
                <span className='text-2xl'>Shams Car-house</span></h1>
            </div>

            <nav>

                <ul className='hidden md:flex gap-8 p-6 uppercase'>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="/about">About Dev</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    {
                        user ?
                            <button className='btn btn-NavLink text-white text-decoration-none' onClick={handleSignOut}>SIGN OUT</button>
                        :
                        <li>
                            <NavLink className='mr-6' to="login">
                            Login
                            </NavLink>
                            <NavLink to="signup">
                            Sign Up
                            </NavLink>
                        </li>
                    }
                </ul>
                

                <FiGrid onClick={showMenu} className={on ? 'hidden': 'absolute right-6 md:hidden top-4 text-4xl cursor-pointer'}/>
                
                <ul className={on ? 'flex flex-col items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center md:hidden pt-5 text-2xl' : 'hidden'}>
                    <BiXCircle onClick={showMenu} className='cursor-pointer text-4xl'/>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="/about">About Dev</NavLink></li>
                    {
                        user ?
                            <button className='btn btn-NavLink text-white text-decoration-none' onClick={handleSignOut}>SIGN OUT</button>
                        :

                            <ul>
                                <li className='mb-8'><NavLink to="login">
                                Login
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="signup">
                                Sign up
                                </NavLink></li>
                            </ul>
                    }
                </ul>
            </nav>
            </div>
                    </div>
        );
    };

export default Header;