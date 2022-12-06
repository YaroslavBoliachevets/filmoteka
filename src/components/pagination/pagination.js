// import PropTypes from 'prop-types';

// import { useState, } from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// AiOutlineArrowRight
// function Pagination({ totalPages, currentPage, updateCurrentPage }) {

// 	// ===============================
// 	const [pageNeighbours, setPageNeighbours ] = useState(0);

// 	const range = (from, to, step = 1) => {
// 		let i = from;
// 		const range = [];

// 		while (i <= to) {
// 		  range.push(i);
// 		  i += step;
// 		}

// 		return range;
// 	  }

// 	  const LEFT_PAGE = 'LEFT';
// const RIGHT_PAGE = 'RIGHT';

// 	// ==============================
//   const toStartPage = () => {
//     updateCurrentPage(1);
//   };

//   const toEndPage = () => {
//     updateCurrentPage(totalPages);
//   };

//   const changePage = value => {
//     updateCurrentPage(currentPage + value);
//   };

//   return (
//     <>
//       <p>Всего страниц :{totalPages}</p>
//       <p>Текущая страница :{currentPage}</p>

//       <button disabled={currentPage === 1} onClick={toStartPage}>
//         <AiOutlineArrowLeft />
//       </button>

//       <button onClick={toStartPage}>1</button>

//       {currentPage > 3 && <span>...</span>}

//       {/* <button type='button' disabled={currentPage === 1} onClick={() => changePage(-1)}> {currentPage - 1}</button> */}

//       <button>{currentPage + 1}</button>
// 	  <button>{currentPage + 2}</button>
// 	  <button>{currentPage + 3}</button>
// 	  <button>{currentPage + 4}</button>
// 	  <button>{currentPage + 5}</button>
//       <button
//         disabled={currentPage === totalPages}
//         onClick={() => {}}
//       >
//         {currentPage + 6}
//       </button>

//       {(totalPages-currentPage) > 3 && <span>...</span>}

//       <button disabled={currentPage === totalPages} onClick={toEndPage}>
//         <AiOutlineArrowRight />
//       </button>
//     </>
//   );
// }

// export default Pagination;

// ====================================
// ====================================

// import PropTypes from 'prop-types';

// import { useState } from 'react';

// import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import {List, Button, CurrentButton} from './pagination.styled';

function Pagination({ totalPages, currentPage, updateCurrentPage }) {
  const LEFT_PAGE = 'LEFT';
  const RIGHT_PAGE = 'RIGHT';
  const pageNeighbours = 2;
  /**
   * Helper method for creating a range of numbers
   * range(1, 5) => [1, 2, 3, 4, 5]
   */
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
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);
      //   console.log("hasLeftSpill", hasLeftSpill, "hasRightSpill", hasRightSpill, "spillOffset",spillOffset, "totalNumbers", totalNumbers);

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
      //   ============================================
      //   console.log("startPage", startPage, "endPage", endPage,
      //   );
      //   ============================================
      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const pages = fetchPageNumbers();
    const handleClick = page => evt => {
      evt.preventDefault();
	  console.log("on button click, page", page);
	  updateCurrentPage(page);
    //   gotoPage(page);
    }

  //   const handleMoveLeft = evt => {
  //     evt.preventDefault();
  //     gotoPage(currentPage - (pageNeighbours * 2) - 1);
  //   }

  //   const handleMoveRight = evt => {
  //     evt.preventDefault();
  //     gotoPage(currentPage + (pageNeighbours * 2) + 1);
  //   }

  //   const gotoPage = page => {
  //     const { onPageChanged = f => f } = this.props;
  //     const currentPage = Math.max(0, Math.min(page, totalPages));
  //     const paginationData = {
  //       currentPage,
  //       totalPages,
  //     };

  //     this.setState({ currentPage }, () => onPageChanged(paginationData));
  //   }

  return (
    <>
      {totalPages === 1 && null}
      <List>
        {pages.map((page, index) => {
          if (page === 'LEFT') {
			return (<li key={index}>
                <Button onClick={handleClick(1)}>
                  {' '}
                  <AiOutlineArrowLeft />
                </Button>
              </li>)
		  }

		  if (page === 'RIGHT') {
			return (<li key={index}>
                <Button onClick={handleClick(totalPages)}>
                  {' '}
                  <AiOutlineArrowRight />
                </Button>
              </li>)
		  }

		  if (currentPage === page) {return (<li key={index}>
			<CurrentButton onClick={handleClick(totalPages)}>
			  {page}
			</CurrentButton>
		  </li>) }
          
		  return (<li key={index}>
			<Button onClick={handleClick(page)}>
			  {page}
			</Button>
		  </li>)
        })}
      </List>
    </>
  );
}
export default Pagination;
