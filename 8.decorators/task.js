'use strickt'
//Задача № 1
//const md5 = require('js-md5'); // При подключении библиотеки для хеширования MD5 не работает тест

function cachingDecoratorNew(func) {
	const cache = [];

	function wrapper(...args) {
		const hash = md5(JSON.stringify(args));

		const objectInCache = cache.find(item => item.hash === hash);
		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.result);
			return "Из кеша: " + objectInCache.result;
		}
        
        let result = func(...args);
        const itemToAdd = {
			hash,
			result
		};
		cache.push(itemToAdd);

		if (cache.length > 5) {
			cache.shift();
		}

		return "Вычисляем: " + result;
	}
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
  
    function wrapper(...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      if (!timeoutId) {
        func.apply(this, args);
        wrapper.count++;
      }
  
      timeoutId = setTimeout(() => {
        wrapper.count++;
        func.apply(this, args);
      }, delay);
  
      wrapper.allCount++;
    }
  
    wrapper.allCount = 0;
    wrapper.count = 0;
  
    return wrapper;
  }