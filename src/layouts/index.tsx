import React from 'react';
import Header from '../components/header';
import '../styles/style.css';

const Layout = (props: any) => (
  <>
    <Header />
    { props.children }
  </>
);

export {
  Layout,
};