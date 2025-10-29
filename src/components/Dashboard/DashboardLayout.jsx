import React, { useState } from "react";
import { motion } from "framer-motion";
import Graph from "./Graph";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useFetchMyShortUrls, useFetchTotalClicks } from "../../hooks/useQuery";
import ShortenPopUp from "./ShortenPopUp";
import { FaLink } from "react-icons/fa";
import ShortenUrlList from "./ShortenUrlList";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [shortenPopUp, setShortenPopUp] = useState(false);

  const onError = () => navigate("/error");

  const {
    isLoading,
    data: myShortenUrls = [],
    refetch,
  } = useFetchMyShortUrls(token, onError);

  const { isLoading: loader, data: totalClicks = [] } = useFetchTotalClicks(
    token,
    onError
  );

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 px-4 sm:px-8 lg:px-14 py-10">
      {loader ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          {/* Graph Section */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6 h-96 flex items-center justify-center">
            {totalClicks.length === 0 ? (
              <div className="text-center space-y-1">
                <h1 className="text-slate-800 font-semibold text-lg sm:text-xl">
                  No Data Available
                </h1>
                <p className="text-slate-600 text-sm sm:text-base">
                  Share your short links to start tracking clicks.
                </p>
              </div>
            ) : (
              <Graph graphData={totalClicks} />
            )}
          </div>

          {/* Create Button */}
          <div className="flex justify-center sm:justify-end mt-8">
            <button
              onClick={() => setShortenPopUp(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md py-2.5 px-6 transition-all shadow-sm"
            >
              Create New Short URL
            </button>
          </div>

          {/* Short Links Section */}
          <div className="mt-10">
            {isLoading ? (
              <Loader />
            ) : myShortenUrls.length === 0 ? (
              <div className="flex justify-center">
                <div className="flex gap-3 items-center bg-white border border-slate-200 rounded-xl px-6 py-5 shadow-sm">
                  <FaLink className="text-indigo-500 text-xl" />
                  <span className="text-slate-700 text-sm sm:text-base">
                    You haven't created any short links yet.
                  </span>
                </div>
              </div>
            ) : (
              <ShortenUrlList data={myShortenUrls} />
            )}
          </div>
        </motion.div>
      )}

      {/* Popup */}
      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  );
};

export default DashboardLayout;
