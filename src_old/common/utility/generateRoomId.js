function generateRoomId(id1, id2) {
  const idx = parseInt(id1) > parseInt(id2) ? parseInt(id1) : parseInt(id2);
  const idy = parseInt(id1) < parseInt(id2) ? parseInt(id1) : parseInt(id2);
  return `ELNP_ROOM_${idx}${idy}`;
}

export default generateRoomId
