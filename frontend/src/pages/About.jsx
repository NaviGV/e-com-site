import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const about = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Forever, we pride ourselves on offering high-quality products that meet the highest standards of craftsmanship and durability. </p>
          <p>Established with the motto 'Celebrating Clothes,' we are dedicated to crafting high-quality products that elevate personal style and bring confidence to every wearer.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to deliver premium-quality clothing that combines style, comfort, and durability, while ensuring exceptional customer satisfaction at every step.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Our quality assurance process ensures that every product undergoes rigorous checks for durability, fabric integrity, and craftsmanship. We are committed to delivering only the finest items that meet the highest standards, providing you with clothing that lasts and exceeds expectations.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>At Forever, we prioritize convenience by offering a seamless shopping experience, from easy navigation on our platform to fast and reliable delivery. Our goal is to make it effortless for you to find, purchase, and enjoy high-quality clothing, all while ensuring your complete satisfaction.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Support</b>
          <p className='text-gray-600'>At Forever, we provide 24/7 exceptional customer support, ensuring that assistance is always just a message away. Our priority is your complete satisfaction, and we're committed to resolving any concerns swiftly to make your experience seamless and enjoyable.</p>

        </div>

       
      </div>
      <NewsLetterBox/>

    </div>
  )
}

export default about