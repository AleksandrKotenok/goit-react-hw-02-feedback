//import PropTypes from 'prop-types'
//import styles from './Statistics.module.css'
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
   return (
       total  > 0 ? (
         <div>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{total}</p>
            <p>Positive feedback:{positivePercentage}%</p>
         </div>):(<p>no feedback</p>)
   )
}
//Statistics.propTypes = {}