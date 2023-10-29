import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Chanel from './Chanel';
import Others from './Other';
import Company from './Company';
import Contact from './Contact';

function NestedContactRoute() {
  return (
    <Routes>
      <Route path='/' element={<Contact />}>
        <Route path="company" element={<Company />} />
        <Route path="chanel" element={<Chanel />} />
        <Route path="other" element={<Others />} />
      </Route>
    </Routes>
  )
}

export default NestedContactRoute;
