import React,{useContext} from 'react'
import FrenchFlag from '../../assets/france.svg'
import SpainFlag from '../../assets//spain.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import AlgeriaFlag from '../../assets/algeria.svg'
import './ToggleLangs.css'

export default function ToggleLangs() {
  return (
    <div className='container-langs'>
    <img src={AlgeriaFlag} alt="image payes" />
    <img src={FrenchFlag} alt="image payes" />
    <img src={SpainFlag} alt="image payes" />
    <img src={EnglishFlag} alt="image payes" />
    </div>
  )
}
