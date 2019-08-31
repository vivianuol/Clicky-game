import Navbar from '../ui/Navbar';

import { connect } from "react-redux";


const mapStateToProps = (state) => {
    console.log("score changed.")
        return {
            score: state.score.score,
            topScore: state.score.topScore
        }
}


const Container = connect(mapStateToProps)(Navbar);

export default Container