const UserPage=(props)=>{
  console.log("Props",props)

  return (
  <div>
    <h1> Users (Ssr)</h1>

    {props.data.users.map((user)=>(<li key={user.id}>{user.firstName}</li>
     ))}
  </div>
  );
  
};
 export const getServerSideProps=async()=>{
  const  data=await (await fetch("https://dummyjson.com/users")).json();
  return{
    props:{
      data 
    },
  };

 };
export default UserPage;

//Its fast
//security

