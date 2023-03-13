import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { DashboardPage } from "./Dashboard/DashboardPage";
import { NotFoundPage } from "./NotFound/NotFound";
import { LoginPage } from "./Login/LoginPage";

export const Routing = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route index element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </>
      ) : (
        <>
          <Route index element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
};
