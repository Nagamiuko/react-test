import React from 'react'
import { Link } from 'react-router-dom'
import {GoHome} from 'react-icons/go'
import {SlLike} from 'react-icons/sl'
import {RiSettings2Fill} from 'react-icons/ri'
import {FaRegUserCircle} from 'react-icons/fa'
import {HiOutlineViewGridAdd} from 'react-icons/hi'
import {TfiShoppingCartFull} from 'react-icons/tfi'
import image from '../../assets/p3.jpg'
import './buttonbar.scss'
const Buttonbar = () => {
  return (
    <div>
        <div className="body-bg">
             <div className="box-content">
                 <ul>
                    <li><Link><GoHome/></Link></li>
                    <li><Link><SlLike/></Link></li>
                    <li className='center-icon'><Link><HiOutlineViewGridAdd/></Link></li>
                    <li><Link><RiSettings2Fill/></Link></li>
                    <li><Link><FaRegUserCircle/></Link></li>
                 </ul>
             </div>
             <div className="box-menu">
                <div className='shop'>
                    <TfiShoppingCartFull />
                </div>
                 <ul>
                    <li><Link>นิยายลิขสิทธิ์</Link></li>
                    <li><Link>นิยายแต่ง</Link></li>
                    <li><Link>การ์ตูน</Link></li>
                    <li><Link>อีบุ๊ค</Link></li>
                    <li><Link>แฟนคลับแปล</Link></li>
                 </ul>
                   <div className='profile'>
                      <img src={image} alt="" />
                   </div>
             </div>
        </div>
    </div>
  )
}

export default Buttonbar