/**
 *
 * Sidebar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecommendationList from './RecommendationList';
import {
  NoChangeStyledAside,
  Aside,
  Ol,
  HeaderWrapper,
  NetworkImageHeaderWrapper,
  ReadingListImageHeaderWrapper,
  H2,
  H3,
  Img,
} from './AsideWrappers';
import { selectHomeRecommendationLists } from '../../selectors';

function Sidebar(props) {
  const StyledAside =
    props.recommendationSource === 'popularOnMedium'
      ? NoChangeStyledAside
      : Aside;

  const StyledImageHeaderWrapper =
    props.recommendationSource === 'readingList'
      ? ReadingListImageHeaderWrapper
      : NetworkImageHeaderWrapper;

  const { header, recommendationSource, headerImg } = props;
  const renderHeader = () => {
    if (recommendationSource === 'popularOnMedium') {
      return (
        <HeaderWrapper>
          <H3>{header}</H3>
        </HeaderWrapper>
      );
    }
    return (
      <StyledImageHeaderWrapper source={recommendationSource}>
        <H2>{header}</H2>
        {headerImg ? <Img src={headerImg} alt="background" /> : ''}
      </StyledImageHeaderWrapper>
    );
  };

  return (
    <div>
      <StyledAside>
        <a href={props.sourceLink}>{renderHeader()}</a>
        <Ol source={props.recommendationSource}>
          {props.articleList.map((id, index) => (
            <RecommendationList
              id={id}
              index={index}
              type={props.recommendationSource}
              key={`${id}`}
            />
          ))}
        </Ol>
      </StyledAside>
    </div>
  );
}

Sidebar.propTypes = {
  header: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
  headerImg: PropTypes.string,
  articleList: PropTypes.array.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  recommendationSource: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { recommendationSource } = ownProps;
  const {
    articleList,
    header,
    sourceLink,
    headerImg,
  } = selectHomeRecommendationLists(state, recommendationSource);

  return {
    articleList,
    header,
    sourceLink,
    headerImg,
  };
}

export default connect(mapStateToProps)(Sidebar);
export { Sidebar };
