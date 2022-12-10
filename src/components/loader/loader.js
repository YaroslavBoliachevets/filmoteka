// BiLoader

import { LoaderWrapper, LoadCircle } from './loader.styled';

function Loader({ loadStatus }) {
  return <>{loadStatus && <LoaderWrapper>
	<LoadCircle/>
	</LoaderWrapper>}</>;
}

export default Loader;
