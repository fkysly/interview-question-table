import React from 'react';
import { Button } from 'antd';
import './App.css';
import mockData from './mock';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>此处编写代码，可随意修改</h1>
        <p style={{ width: 300 }}>{JSON.stringify(mockData)}</p>{' '}
        {/* mock的数据 */}
        <Button type="primary">保存</Button>
      </div>
    );
  }
}

export default App;
