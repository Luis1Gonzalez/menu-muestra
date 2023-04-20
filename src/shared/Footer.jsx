import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdMailUnread } from 'react-icons/io'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'


export default function Footer() {
    return (
        <div className='footer-wrap'>

            <div className='flex justify-center'>
                <a className='social-icons inst'><AiOutlineInstagram /></a>
                <a className='social-icons face'><FaFacebookSquare /></a>
                <a className='social-icons twit'><FaTwitter /></a>
            </div>

            <h5 className='title-contact'>Contactanos</h5>

            <p className='contact'><span className='contact-icon'><FaMapMarkedAlt /></span><a href="https://goo.gl/maps/6m4XhJ5r3EGBHTsd9" target="_blank">C. de Sta. Orosia, 12, 50013 Zaragoza</a></p>
            <p className='contact'><span className='contact-icon'><BsFillTelephoneFill /></span><a href="tel:+51969516619">Telefono: 979516619</a></p>
            <p className='contact'><span className='contact-icon'><IoMdMailUnread /></span><a href="mailto:zacariajavier020@gmail.com">Email: administracion@laestancia.com</a></p>

            <div className='credits'>
                <a href="https://www.luis1gonzalez.com" target="_blank">
                <p>Copyright 2023 JZ Diseños&Muebles | Todos los derechos reservados</p>
                <p>Desarrollado por https://www.luis1gonzalez.com</p>
                </a>
            </div>






























        </div>
    )
}