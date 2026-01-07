import { useState, type MouseEvent } from 'react'
import './App.css'

// プレイヤーの座標の型定義
interface Player {
  x: number;
  y: number;
}

function App() {
  // 自分の位置を管理するステート（初期位置は x:100, y:100）
  const [me, setMe] = useState<Player>({ x: 100, y: 100 });

  // 画面をクリックした時の処理
  const handleMapClick = (e: MouseEvent<HTMLDivElement>) => {
    setMe({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div 
      className="map" 
      onClick={handleMapClick}
      style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'relative', 
        backgroundColor: '#f0f0f0', 
        overflow: 'hidden' 
      }}
    >
      <div style={{ position: 'absolute', top: 20, left: 20, pointerEvents: 'none' }}>
        <h2>oVice風プロトタイプ</h2>
        <p>画面をクリックして移動してください</p>
      </div>
      
      {/* 自分自身のアバター */}
      <div
        className="avatar"
        style={{
          position: 'absolute',
          left: me.x - 25, // 中心を合わせるためにサイズの半分を引く
          top: me.y - 25,
          width: '50px',
          height: '50px',
          backgroundColor: '#007bff',
          borderRadius: '50%',
          transition: 'all 0.5s ease-out', // 0.5秒かけてスルスル動く
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          zIndex: 10
        }}
      >
        ME
      </div>
    </div>
  )
}

export default App