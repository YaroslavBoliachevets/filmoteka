import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { List, Button, CurrentButton } from './pagination.styled';

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const LEFT_PAGE = 'LEFT';
  const RIGHT_PAGE = 'RIGHT';
  const pageNeighbours = 2;

  const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const handleClick = page => evt => {
    evt.preventDefault();
    setCurrentPage(page);
  };

  const pages = fetchPageNumbers();
  
  return (
    <>
      {totalPages === 1 && null}
      <List>
        {pages.map((page, index) => {
          if (page === 'LEFT') {
            return (
              <li key={index}>
                <Button onClick={handleClick(1)}>
                  {' '}
                  <AiOutlineArrowLeft />
                </Button>
              </li>
            );
          }

          if (page === 'RIGHT') {
            return (
              <li key={index}>
                <Button onClick={handleClick(totalPages)}>
                  {' '}
                  <AiOutlineArrowRight />
                </Button>
              </li>
            );
          }

          if (currentPage === page) {
            return (
              <li key={index}>
                <CurrentButton onClick={handleClick(totalPages)}>
                  {page}
                </CurrentButton>
              </li>
            );
          }

          return (
            <li key={index}>
              <Button onClick={handleClick(page)}>{page}</Button>
            </li>
          );
        })}
      </List>
    </>
  );
}
export default Pagination;
