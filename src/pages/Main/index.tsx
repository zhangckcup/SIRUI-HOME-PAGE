import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import NavBar from '@/components/Navbar';
import Home from '../Home';

function mapStateToProps(state) {
  return {};
}
function Index(props) {
  const { dispatch } = props;

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: '#8c68ff',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}>
        <NavBar current="Home" />
      </div>
      <Home />
    </div >
  );
}
export default connect(mapStateToProps)(Index);
