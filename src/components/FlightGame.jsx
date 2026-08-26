import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

import { Explosion, Missile, Plane } from '../models'

const MOVE_KEYS = new Set([
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'w',
  'a',
  's',
  'd',
  'W',
  'A',
  'S',
  'D',
])

const POOL = 4
const SPEED = 6
const LIMITS = { x: 7, yMin: -6.5, yMax: 3.2 }
const HIT_RADIUS = 1.05

const random = (min, max) => min + Math.random() * (max - min)

const FlightGame = ({
  planeScale,
  planePosition,
  planeRotation,
  gameActive,
  keysRef,
  onStart,
  onScore,
  onExit,
}) => {
  const craftRef = useRef()
  const missileRefs = useRef([])
  const offset = useRef({ x: 0, y: 0 })
  const missiles = useRef(
    Array.from({ length: POOL }, () => ({
      active: false,
      vx: 0,
      vy: 0,
      wobble: 0,
    }))
  )
  const spawnTimer = useRef(0)
  const scoreTick = useRef(0)
  const hitCooldown = useRef(0)
  const [blast, setBlast] = useState({
    id: 0,
    position: [0, 0, 0],
  })

  const onStartRef = useRef(onStart)
  const onScoreRef = useRef(onScore)
  const onExitRef = useRef(onExit)
  onStartRef.current = onStart
  onScoreRef.current = onScore
  onExitRef.current = onExit

  const resetMissiles = () => {
    missiles.current.forEach((slot, i) => {
      slot.active = false
      const node = missileRefs.current[i]
      if (node) node.visible = false
    })
    spawnTimer.current = 0
  }

  const spawnMissile = craft => {
    const slotIndex = missiles.current.findIndex(slot => !slot.active)
    if (slotIndex < 0) return

    const node = missileRefs.current[slotIndex]
    if (!node) return

    const startX = craft.x + random(-5.5, 5.5)
    const startY = craft.y + 8
    const startZ = craft.z + random(-0.6, 0.6)

    node.position.set(startX, startY, startZ)
    node.visible = true
    missiles.current[slotIndex] = {
      active: true,
      vx: random(-0.35, 0.35),
      vy: random(-2.8, -1.8),
      wobble: random(0.6, 1.4),
    }
  }

  useEffect(() => {
    const onDown = event => {
      if (event.key === 'Escape' && gameActive) {
        event.preventDefault()
        offset.current = { x: 0, y: 0 }
        keysRef.current = { up: false, down: false, left: false, right: false }
        resetMissiles()
        onExitRef.current()
        return
      }
      if (!MOVE_KEYS.has(event.key)) return
      event.preventDefault()
      if (event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W') {
        keysRef.current.up = true
      }
      if (event.key === 'ArrowDown' || event.key === 's' || event.key === 'S') {
        keysRef.current.down = true
      }
      if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
        keysRef.current.left = true
      }
      if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
        keysRef.current.right = true
      }
      if (!gameActive) onStartRef.current()
    }

    const onUp = event => {
      if (event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W') {
        keysRef.current.up = false
      }
      if (event.key === 'ArrowDown' || event.key === 's' || event.key === 'S') {
        keysRef.current.down = false
      }
      if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
        keysRef.current.left = false
      }
      if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
        keysRef.current.right = false
      }
    }

    window.addEventListener('keydown', onDown, { passive: false })
    window.addEventListener('keyup', onUp)
    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
    }
  }, [gameActive, keysRef])

  useFrame(({ clock }, delta) => {
    const dt = Math.min(delta, 0.05)
    const craft = craftRef.current
    if (!craft) return

    const { up, down, left, right } = keysRef.current
    if (up) offset.current.y += SPEED * dt
    if (down) offset.current.y -= SPEED * dt
    if (left) offset.current.x -= SPEED * dt
    if (right) offset.current.x += SPEED * dt

    if (!gameActive) {
      offset.current.x += (0 - offset.current.x) * 3 * dt
      offset.current.y += (0 - offset.current.y) * 3 * dt
    }

    offset.current.x = Math.max(-LIMITS.x, Math.min(LIMITS.x, offset.current.x))
    offset.current.y = Math.max(
      LIMITS.yMin - planePosition[1],
      Math.min(LIMITS.yMax - planePosition[1], offset.current.y)
    )

    craft.position.x = planePosition[0] + offset.current.x
    craft.position.y = planePosition[1] + offset.current.y
    craft.position.z = planePosition[2]

    const targetBank = (Number(left) - Number(right)) * 0.35
    const targetPitch = (Number(down) - Number(up)) * 0.22
    craft.rotation.z += (targetBank - craft.rotation.z) * 8 * dt
    craft.rotation.x += (targetPitch - craft.rotation.x) * 8 * dt

    if (hitCooldown.current > 0) hitCooldown.current -= dt

    if (!gameActive) {
      resetMissiles()
      return
    }

    scoreTick.current += dt
    if (scoreTick.current >= 2) {
      scoreTick.current = 0
      onScoreRef.current(1)
    }

    spawnTimer.current += dt
    if (spawnTimer.current >= 2.4) {
      spawnTimer.current = 0
      spawnMissile(craft.position)
    }

    const t = clock.elapsedTime
    missiles.current.forEach((slot, i) => {
      if (!slot.active) return
      const node = missileRefs.current[i]
      if (!node) return

      node.position.x += slot.vx * dt + Math.sin(t * slot.wobble + i) * 0.01
      node.position.y += slot.vy * dt
      node.rotation.x = Math.PI * 0.5
      node.rotation.z = Math.sin(t * slot.wobble) * 0.12

      const dx = node.position.x - craft.position.x
      const dy = node.position.y - craft.position.y
      if (
        hitCooldown.current <= 0 &&
        dx * dx + dy * dy < HIT_RADIUS * HIT_RADIUS
      ) {
        slot.active = false
        node.visible = false
        hitCooldown.current = 0.55
        setBlast({
          id: Date.now(),
          position: [
            craft.position.x,
            craft.position.y + 0.4,
            craft.position.z,
          ],
        })
        onScoreRef.current(-10)
        return
      }

      if (node.position.y < craft.position.y - 7) {
        slot.active = false
        node.visible = false
        onScoreRef.current(1)
      }
    })
  })

  return (
    <>
      <group ref={craftRef} position={planePosition}>
        <Plane
          isRotating
          position={[0, 0, 0]}
          rotation={planeRotation}
          scale={planeScale}
        />
      </group>

      {Array.from({ length: POOL }, (_, i) => (
        <group
          key={i}
          ref={el => {
            missileRefs.current[i] = el
          }}
          visible={false}>
          <Missile />
        </group>
      ))}

      <Explosion playId={blast.id} position={blast.position} />
    </>
  )
}

export default FlightGame
