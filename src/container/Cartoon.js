import Cartoon from '../components/Cards/Cartoon'
import { connect } from 'react-redux'
import { clickImage } from '../actions'

const mapDispatchToProps = dispatch =>
	({
		handleClick(e) {
			dispatch(
				clickImage(e.target.id)
			)
		}
	})

export default connect(null, mapDispatchToProps)(Cartoon)