import Cards from '../ui/Cards';
import { clickCard} from '../../actions/actions'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
        return {
            allCards: state.allCards
        }
}

const mapDispatchToProps = dispatch => {
     
    return {
        onClickCard (item) {
            dispatch (
                clickCard(item)
            )
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Cards);

export default Container