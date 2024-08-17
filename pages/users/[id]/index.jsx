//client side render
import useSWR from 'swr';
 import { useRouter } from 'next/router';

 const fetcher=(...args)=>fetch(...args).then((res)=>res.json())

const UserInfo = () => {
  const router = useRouter();
  const { data: userInfo, error } = useSWR(`https://dummyjson.com/users/${router.query.id}`, fetcher);

  if (error) return <div>Error: {error.message}</div>;
  if (!userInfo) return <div>Loading...</div>;

  return (
    <div>
      <h1>{userInfo.firstName}</h1>
      <h1>{userInfo.email}</h1>
    </div>
  );
};

export default UserInfo;