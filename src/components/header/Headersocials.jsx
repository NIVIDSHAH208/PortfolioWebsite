import React from 'react'
import { BsLinkedin } from 'react-icons/bs' 
import { SiLeetcode } from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const Headersocials = () => {
  return (
      <div className='header__socials'>
          <a href='https://www.linkedin.com/in/nividshah/' target="__blank"><BsLinkedin /></a>
          <a href='https://github.com/nividshah208/' target="__blank"><BsGithub /></a>
          <a href='https://leetcode.com/NividShah/' target="__blank"><SiLeetcode /></a>
    </div>
  )
}

export default Headersocials