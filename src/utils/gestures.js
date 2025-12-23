export function getAngle(cx, cy, x, y) {
  const dx = x - cx;
  const dy = y - cy;
  return Math.atan2(dy, dx) * (180 / Math.PI);
}

export function normalizeAngle(angle) {
  if (angle < 0) return angle + 360;
  return angle;
}

export function angleDiff(a, b) {
  let diff = a - b;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  return diff;
}
