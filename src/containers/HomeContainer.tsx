import { connect } from 'react-redux';
import Home from '../components/Home';
import { ReduxState } from '../types';
import { fetchChapters } from '../redux/actions/chapters';
import { fetchJuzs } from '../redux/actions/juzs';

const mapStateToProps = (state: ReduxState) => ({
  loadingChapters: state.chapters.isLoading,
  loadingJuzs: state.juzs.isLoading,
  chapters: state.chapters.entities,
  juzs: state.juzs.entities,
});

export default connect(
  mapStateToProps,
  {
    fetchChapters,
    fetchJuzs,
  }
)(Home);
