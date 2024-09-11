import React from 'react'

import data from './data';
import PublicationDiv from '../components/cards/publicationComp_card';


const Publications = () => {
  const {publications}=data;
  return (
    <div className='flex justify-center items-center'><PublicationDiv title={'Publications'} para={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolo'} cardsData={publications} /></div>
  )
}

export default Publications;