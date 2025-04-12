import React from "react";

function App() {
  function getDeviceSpecificLink() {
    const userAgent = navigator.userAgent.toLowerCase();
  
    // Все Huawei и Honor → одна ссылка
    const isHuaweiOrHonor = /huawei|honor/i.test(userAgent);
  
    // Samsung на Android (исключаем SmartTV и другие устройства)
    const isSamsung = /samsung/i.test(userAgent) && /android/i.test(userAgent);
  
    // iOS (iPhone, iPad, iPod)
    const isIOS = /iphone|ipad|ipod/i.test(userAgent);
  
    // Android (но не Samsung/Huawei/Honor)
    const isGenericAndroid = /android/i.test(userAgent) && !isHuaweiOrHonor && !isSamsung;
  
    // Мобильное устройство (для определения десктопа)
    const isMobile = /mobile|android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  
    // Ссылки (замените на реальные)
    const links = {
      huaweiHonor: 'https://huawei-honor.example.com', // Все Huawei и Honor
      samsung: 'https://samsung.example.com',          // Только Samsung на Android
      android: 'https://android.example.com',          // Остальные Android (Xiaomi, Oppo и др.)
      ios: 'https://ios.example.com',                  // iPhone/iPad
      desktop: 'https://desktop.example.com',          // Десктопы (Windows/macOS/Linux)
      default: 'https://default.example.com'           // На случай, если не попали в другие категории
    };
  
    // Выбор ссылки по приоритетам
    if (isHuaweiOrHonor) {
      return links.huaweiHonor;
    } else if (isSamsung) {
      return links.samsung;
    } else if (isIOS) {
      return links.ios;
    } else if (isGenericAndroid) {
      return links.android;
    } else if (!isMobile) {
      return links.desktop;
    } else {
      return links.default;
    }
  }

  
  // Пример использования
  const deviceLink = getDeviceSpecificLink();

  return (
    <div className="inputWrapper"> 
          Ссылка для вашего устройства: {deviceLink}
        </div> 
  );
}

export default App;
