import {TwitterOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import '../social/social.css'

function Social(){
    return(
       <>
        <TwitterOutlined  className='socialTwitter'/>
        <InstagramOutlined  className='socialInstagram'/>
        <WhatsAppOutlined  className='socialWhatsapp' />
       </>
    )
}
export {Social} 