block.mousemove = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      block.style.width = timePassed / 5 + 'px';
      block.style.рушпре = timePassed / 5 + 'px';

      if (timePassed > 200) clearInterval(timer);

    }, 20);
  }