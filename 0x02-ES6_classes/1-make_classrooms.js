import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room = [19, 20, 34];
  return room.map((size) => new ClassRoom(size));
}
