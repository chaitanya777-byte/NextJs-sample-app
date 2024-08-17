import Link from "next/link";
import useSWR from "swr";
//client side 
const fetcher=(...args)=>fetch(...args).then((res)=>res.json())
const UserPage=()=>{
  const{data,error}=useSWR("https://dummyjson.com/users",fetcher);
  if(error){
    return <h1>Erroe Happned!</h1>
  }
  if(!data) return <h1>Loading</h1>


  return(

    <div>
      <h1>
        Users
      </h1>
      {data.users && data.users.map((user)=>(<Link href={`/users/${user.id}`} key={user.id}>
      <div>
      {user.firstName}
      </div>
      </Link>
    ))}
    </div>
  )
}
export default UserPage