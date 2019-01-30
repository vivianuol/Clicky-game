import Navbar from '../components/Navbar'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    score: state.currentRecord.score,
    topScore: state.currentRecord.topScore
  }
}

export default connect(mapStateToProps)(Navbar)