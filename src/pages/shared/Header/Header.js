import React, { useState } from 'react';
import './Header.css';
import { GiCarWheel } from 'react-icons/gi';
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
            <div className='w-full lg:backdrop-blur-sm flex justify-between px-16 lg:px-24 py-3 lg:py-0 items-center border-b border-white'>

            <div className='text-2xl font-bold text-center flex'>
                <h1 className='logoName lg:text-4xl'>Car Stock</h1>
            </div>

            <nav>

                <ul className='hidden lg:flex gap-8 p-6 uppercase'>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/addcar">Add New</NavLink></li>
                    <li><NavLink to="/manage">Manage</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    {
                        user ?
                            <button className='btn btn-NavLink text-decoration-none' onClick={handleSignOut}>SIGN OUT</button>
                        :
                        <li>
                            <NavLink className='mr-6' to="login">
                            Login
                            </NavLink>
                            <NavLink to="signup" className='signUpButton'>
                            Sign Up
                            </NavLink>
                        </li>
                    }
                </ul>
                

                <FiGrid onClick={showMenu} className={on ? 'hidden': 'absolute right-16 lg:hidden top-3 text-3xl cursor-pointer'}/>
                
                <ul className={on ? 'flex flex-col items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center lg:hidden pt-5 text-2xl' : 'hidden'} style={{ zIndex: '1000' }}>
                    <BiXCircle onClick={showMenu} className='cursor-pointer text-4xl'/>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/addcar">Add New</NavLink></li>
                    <li><NavLink to="/manage">Manage</NavLink></li>                    <li><NavLink to="/blog">Blog</NavLink></li>
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