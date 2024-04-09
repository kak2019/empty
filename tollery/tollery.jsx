import React, { useRef } from 'react';
import LuckTurn from './index'; // 假设组件文件名为LuckTurn.js
import './index.css';
function App() {
  const luckTurnRef = useRef(); // 创建引用

  // 抽奖结束后的回调函数
  const handleComplete = () => {
    console.log('抽奖结束！');
  };

  // 开始抽奖
  const startRoll = () => {
    const prizeIndex = Math.floor(Math.random() * 13); // 假设有13个奖项
    luckTurnRef.current.start(prizeIndex, handleComplete);
  };

  return (
    <div style={{marginLeft:300}}>
      <LuckTurn
        ref={luckTurnRef}
        size={6} // 奖项总数
        width="800px"
        height="800px"
        margin-left="300px"
        background="./names.png" // 转盘背景图
        time={4000} // 旋转时间
      >
        {/* 这里可以放置转盘的中心按钮或其他装饰性元素 */}
        <button className="luckTurnBtn" onClick={startRoll}>开 始</button>
      </LuckTurn>
      <button onClick={startRoll}>开始抽奖</button>
    </div>
  );
}

export default App;
