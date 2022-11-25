import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../components/login';

import { Register } from '../components/register';
import { TalentForm, TalentList } from '../components/talent';

export const Router = () => (
  <Routes>
    <Route path='login' element={<Login />} />
    <Route path='register' element={<Register />} />
    <Route path='talents' element={<TalentList />} />
    <Route path='talents/new' element={<TalentForm />} />
    <Route path='talents/:id' element={<TalentForm />} />
    <Route path='*' element={<Navigate to='/login' />} />
  </Routes>
);
