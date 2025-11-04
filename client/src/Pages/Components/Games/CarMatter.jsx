import { useRef, useEffect } from 'react'
import Matter from 'matter-js'
import { Engine, World, Render, Bodies, Body, Constraint, MouseConstraint, Mouse, Composite, } from 'matter-js'
import Back from '../Back'




export default function CarMatter() {
  const scene = useRef(null)

  useEffect(() => {

    // Matter.use('matter-wrap')

    var engine = Engine.create()
    let world = engine.world;

    let cw = scene.current.clientWidth -2
    let ch = scene.current.clientHeight -2
    window.addEventListener('keypress', updateGravity)
    window.addEventListener('touchstart', touchMove)

    function touchMove() {
      // e.preventDefault()
      engine.gravity.y = -1
      engine.gravity.x = 0
    }

    function updateGravity(e) {
      if (e.key === 'w') {
        engine.gravity.y = -1
        engine.gravity.x = 0
      }
      else if (e.key === 's') {
        engine.gravity.y = 1
        engine.gravity.x = 0
      }
      else if (e.key === 'd') {
        engine.gravity.y = 0
        engine.gravity.x = 1
      }
      else if (e.key === 'a') {
        engine.gravity.y = 0
        engine.gravity.x = -1
      }

    }

    // create a renderer
    var render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        pixelRatio: 2,
        background: '#2D2424',
        width: cw,
        height: ch,
        wireframes: false,
      }
    });


    // run the renderer
    Render.run(render);

    for (let i = 0; i < 30; i++) {
      let ball = Bodies.circle((Math.random())* cw + 200, Math.random() * ch / 2, (Math.random() + .5) * 15, {
        restitution: .7,
        friction: 1,
        render: {
          lineWidth: 0
        }
      });
      Composite.add(world, [ball])
    }

    let box8 = Bodies.circle(cw / 2, ch / 2 - 15, 80, {
      isStatic: true, restitution: 1, friction: .1,
      render: {
        fillStyle: 'whitesmoke',
        
      }
    })



    // create two boxes and a ground
    var ground = Bodies.rectangle(cw / 3, ch, cw + 500, 20, {
      isStatic: true,
      render: { fillStyle: 'transparent', }
    });

    var wallRight = Bodies.rectangle(cw - 10, ch / 2, 20, ch, {
      isStatic: true,
      render: { fillStyle: 'transparent', }
    });

    var wallLeft = Bodies.rectangle(0, ch / 2, 20, ch, {
      isStatic: true,
      render: { fillStyle: 'transparent', }
    });

    var ceiling = Bodies.rectangle(cw / 2, 0, cw, 20, {
      isStatic: true,
      render: { fillStyle: 'transparent', }
    });

    Composite.add(world, [box8, ground, wallRight, wallLeft, ceiling]);


    let wheel1 = Bodies.circle(cw / 2, ch  - 200, 25, {
      isStatic: false, restitution: 0, friction: 1, mass: 1,
     
      render: {
        fillStyle: '#395B64',
      }
    })
    let wheel2 = Bodies.circle(cw / 2 + 30, ch  - 100, 20, {
      isStatic: false, restitution: 0, friction: 1, mass: 1,
      render: {
        fillStyle: '#A5C9CA',

      }
    })

    let car = Constraint.create({
      bodyA: wheel1,
      bodyB: wheel2,
      stiffness: 1,
      length: 50,
      render: {
        visible: true,
      }
    })

    Composite.add(world, [car, wheel1, wheel2])


    window.addEventListener('keydown', moveCar)


    function moveCar(e) {
      if (e.key == 'ArrowRight') {
        Body.setAngularVelocity(wheel1, 0.5)
        Body.setAngularVelocity(wheel2, 0.5)

      }
      else if (e.key == 'ArrowLeft') {
        Body.setAngularVelocity(wheel1, -0.5)
        Body.setAngularVelocity(wheel2, -0.5)
      }
      else if (e.key == 'ArrowDown') {
        Body.setAngularVelocity(wheel1, 0)
        Body.setAngularVelocity(wheel2, 0)
      }
    }

    // run the engine
    Matter.Runner.run(engine);



    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,

        constraint: {

          stiffness: 0.2,
          render: {
            visible: false,


          }
        }
      });


    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    // mouse.element.removeEventListener("mousedown", mouse.mousewheel);
    // mouse.element.removeEventListener("mouseup", mouse.mousewheel);
    Composite.add(world, mouseConstraint);


    // keep the mouse in sync with rendering
    render.mouse = mouse;
    

    // unmount
    return () => {
      // destroy Matter
      Render.stop(render)
      World.clear(world)
      Engine.clear(engine)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
      // window.removeEventListener('resize', resize)
      window.removeEventListener('touchstart', touchMove)
      window.removeEventListener('keydown', moveCar)
      window.removeEventListener('keypress', updateGravity)

    }
  }, [])


  return (
    <div ref={scene} className="home" >
      <Back/>
      <div className="inst-icon"><i>i</i>
        <div className='instruction'>
          <div className='inst-container'>
            <div>use these keys to make it more fun (use keyboard)</div>
            <div> <i>arrow keys --</i> to move and stop</div>
            <div> <i>a,w,s,d --</i> to change the gravity </div>
          </div>
        </div>
      </div>
      {/* <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '9999', fontSize: 'clamp(1.5rem, 3vw, 3rem)', color: '#61764B', userSelect: 'none' }}><span style={{ fontFamily: 'serif' }}>Hello</span> <i>there!</i></div> */}
    </div>
  )
}
