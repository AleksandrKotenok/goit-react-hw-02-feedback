import { Fragment } from 'react'
//import PropTypes from 'prop-types'
//import styles from '../Section/Section.module.css'
export const Section = ({ children, title}) => { 
   return (
   <Fragment>   
      <h1>{title}</h1>
      {children}
   </Fragment>
      )
}

//Section.propTypes = {}