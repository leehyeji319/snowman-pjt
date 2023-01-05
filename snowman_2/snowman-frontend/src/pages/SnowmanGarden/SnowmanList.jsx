import { useState } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import '../../styles/Paging.css';

export default function SnowmanList({ data, gardenEmail }) {
  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(6);
  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
  };

  if (data) {
    return (
      <>
        {data.length > 0 ? (
          data
            .slice(pagePost * (page - 1), pagePost * (page - 1) + pagePost)
            .map((a, i) => {
              const snowmanIdDivmod = a.snowmanId % 6;
              return (
                <div key={a.snowmanId}>
                  {snowmanIdDivmod === 1 ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman1"
                      className="snowman1"
                    />
                  ) : snowmanIdDivmod === 2 ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman2"
                      className="snowman2"
                    />
                  ) : snowmanIdDivmod === 3 ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman3"
                      className="snowman3"
                    />
                  ) : snowmanIdDivmod === 4 ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman4"
                      className="snowman4"
                    />
                  ) : snowmanIdDivmod === 5 ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman5"
                      className="snowman5"
                    />
                  ) : snowmanIdDivmod === 0 ? (
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/snowmanList/' +
                        a.snowmanType +
                        '.png'
                      }
                      alt="snowman6"
                      className="snowman6"
                    />
                  ) : null}
                </div>
              );
            })
        ) : (
          <></>
        )}
        {data.length > 0 ? (
          <Page>
            <Pagination
              // * 필수 값
              // *활성 페이지
              activePage={page}
              // 페이지당 항목 수
              itemsCountPerPage={6}
              // 페이지 총 아이템수
              totalItemsCount={data.length}
              // 페이지 범위
              pageRangeDisplayed={3}
              // 이전 페이지 탐색 버튼의 텍스트
              prevPageText={'<'}
              // 다음 페이지 탐색 버튼의 텍스트
              nextPageText={'>'}
              // 페이지 변경 핸들러 pageNumber를 인수로 수신
              onChange={handlePageChange}
              className="Pagination"
            />
          </Page>
        ) : null}
      </>
    );
  }
}

const Page = styled.div`
  &.Pagination {
    width: 100%;
`;
