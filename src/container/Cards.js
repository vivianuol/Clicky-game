import Cards from '../components/Cards'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    arr: state.allChars
  }
}

export default connect(mapStateToProps)(Cards)