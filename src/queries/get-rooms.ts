import { createClient } from "@/prismicio"

const getRooms = () => {
  const client = createClient();
  return client.getAllByType('roomdetails')
}

export default getRooms;