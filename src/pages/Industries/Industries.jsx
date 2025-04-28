// 

import React from 'react'
import HeroInd from './HeroInd'
import Logistics from './Logistics'
import HealthCare from './HealthCare'
import RealEstate from './RealEstate'
import Travel from './Travel'
import Education from './Education'
import Media from './Media'
import Finance from './Finance'
import Ecommerce from './Ecommerce'
import Manufacturing from './Manufacturing'
import TeleCom from './TeleCom'
import Energy from './Energy'
import Automotive from './Automotive'
import Insurance from './Insurance'
import PublicSector from './PublicSector'
import Agriculture from './Agriculture'
import LegalTech from './LegalTech'
import Sports from './Sports'
import Environment from './Environment'
import HRRecruitment from './HRRecruitment'

function Industries() {
  const sections = [
    <Logistics key="logistics" />,
    <HealthCare key="healthcare" />,
    <RealEstate key="realestate" />,
    <Travel key="travel" />,
    <Education key="education" />,
    <Media key="media" />,
    <Finance key="finance" />,
    <Ecommerce key="ecommerce" />,
    <Manufacturing key="manufacturing" />,
    <TeleCom key="telecom" />,
    <Energy key="energy" />,
    <Automotive key="automotive" />,
    <Insurance key="insurance" />,
    <PublicSector key="publicsector" />,
    <Agriculture key="agriculture" />,
    <LegalTech key="legaltech" />,
    <Sports key="sports" />,
    <Environment key="environment" />,
    <HRRecruitment key="hrrecruitment" />,
  ]

  const backgrounds = [
    'bg-gradient-to-r from-whitesmoke-50 to-blue-100',
  ]

  return (
    <div className="bg-gray-100">
      <HeroInd />
      {sections.map((Section, index) => (
        <div
          key={index}
          className={`w-full ${backgrounds[index % backgrounds.length]} py-20 px-6 md:px-16 transition-all duration-700 ease-in-out`}
        >
          <div
            className="max-w-7xl mx-auto animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {Section}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Industries