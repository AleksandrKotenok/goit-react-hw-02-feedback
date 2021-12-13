//import PropTypes from 'prop-types'
//import styles from './Statistics.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   return options.map(item =>
      <button
         type="button"
         key={item}
         onClick={() => {onLeaveFeedback(item)}}>{item}</button>)
}
FeedbackOptions.propTypes = {}

