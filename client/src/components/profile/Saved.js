import React, { useState, useEffect } from "react";
import PostThumb from "../PostThumb";
import LoadIcon from "../../images/loading.gif";
import LoadMoreBtn from "../LoadMoreBtn";
import { getDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

const Saved = ({ auth, dispatch }) => {
  const [savedposts, setSavedPosts] = useState([]);
  const [result, setResults] = useState(9);
  const [page, setPage] = useState(2);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    getDataAPI(`getSavedPosts`, auth.token)
      .then((res) => {
        setSavedPosts(res.data.savePosts);
        setResults(res.data.result);
        setLoad(false);
      })
      .catch((err) => {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: { error: err.response.data.message },
        });
      });
    return () => setSavedPosts([]);
  }, [auth.token, dispatch]);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataAPI(`getSavedPosts?limit=${page * 9}`, auth.token);
    setSavedPosts(res.data.savePosts);
    setResults(res.data.result);
    setPage(page + 1);
    setLoad(false);
  };

  return (
    <div>
      <PostThumb posts={savedposts} result={result} />
      {load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />}
      <LoadMoreBtn
        result={result}
        page={page}
        load={load}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default Saved;
