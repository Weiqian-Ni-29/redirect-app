import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // 立即跳转到目标 URL
    window.location.href = "https://siiinomad.com";
    
    // 如果需要延迟跳转（例如 3 秒后跳转），可以这样写：
    // setTimeout(() => {
    //   window.location.href = "https://www.example.com";
    // }, 3000);
  }, []); // 空依赖数组表示只在组件挂载时执行一次

  // 不渲染任何内容
  return null;
}

export default App;
