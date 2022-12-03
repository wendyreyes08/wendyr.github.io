let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('El arte no reproduce aquello que es visible sino que hace visible aquello que no siempre lo es.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
