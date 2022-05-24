import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./App.css";

function App() {
  // const url =
  //   "https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=12";
  const [items, setItems] = useState([]);
  const [pageCount,setPageCount] = useState(0)
  
  let limit =12
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`;
    const getComments = async () => {
      const res = await fetch(url);
      const data = await res.json(); 
      // to get total number of data coming from api
      const total = res.headers.get('x-total-count')
      setPageCount(Math.ceil(total/limit))
      //console.log(total)
      setItems(data);
    };
    getComments();
  }, [limit]);

 // console.log(items);

  const fecthComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data
  };

  const handlePageClick = async (data) => {
    // console.log(data.selected);
    let currentPage = data.selected + 1;

    const commentFetchFromServer = await fecthComments(currentPage);
    setItems(commentFetchFromServer);
  };

  return (
    <div className="container">
      <div className="row m-2">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">Id :{item.id} </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    {item.email}
                  </h6>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        //copy classname from bootstrap
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"page-item active"}
      />
    </div>
  );
}

export default App;
