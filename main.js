window.onload = () => {
  
  let target = document.querySelectorAll(".content"),
      options = {threshold:.5},
      observer = new IntersectionObserver(
        function(e){
          e.forEach(
            function(e){
              if (e.isIntersecting){
                document.body.id = e.target.id+"-animate";
              }
            }
          )
        },options
      );
  target.forEach(function(e){
    observer.observe(e);
  });;
  
  // helvetiva.ccを参考にしました。
}

