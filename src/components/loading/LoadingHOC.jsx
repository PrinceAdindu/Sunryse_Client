import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from '../loading/Loading';

LoadingHOC.propTypes = {
  WrappedComponent: PropTypes.func.isRequired,
  loaderId: PropTypes.string.isRequired,
  initialLoadingState: PropTypes.bool,
  loaderStyles: PropTypes.string,
  containerStyles: PropTypes.string,
};

export default function LoadingHOC(
  WrappedComponent,
  id,
  initialLoadingState = true,
  loaderStyles,
  containerStyles,
) {
  function HOC() {
    const [isLoading, setLoading] = useState(initialLoadingState);

    useEffect(() => {
      if (isLoading) {
        document.getElementById(id).style.display = 'none';
      } else {
        document.getElementById(id).style.display = 'flex';
      }
    }, [isLoading]);

    return (
      <>
        {isLoading && (
          <Loading
            loaderStyles={loaderStyles}
            containerStyles={containerStyles}
          />
        )}
        <WrappedComponent isLoading={isLoading} setLoading={setLoading} />{' '}
      </>
    );
  }

  return HOC;
}
