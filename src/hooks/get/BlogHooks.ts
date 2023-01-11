import { collection, CollectionReference, doc, getDoc, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../../Firebase'
import { useQuery } from '@tanstack/react-query';
import { BlogModel } from '../../types/BlogTypes';

export const useGetBlogById = (blogid:string) => {

  const fetchBlogById = async () =>{
    console.log(blogid)
    const docRef = doc(db, `blogs`,blogid)
    const query =( await getDoc(docRef)).data()
    console.log(query)
    return query as BlogModel
  }

  const {isLoading,error,data}=useQuery(['blogpost',blogid], async ()=>{
    const result = await fetchBlogById()
    return result
  },

	{staleTime: Infinity}
	)
  return {isLoading,error,data}
}

export const useBlogToExplore = (page: number) => {
  const fetchBlogsToExplore = async () => {
    const blogsRef = (collection(db,'blogs')) as CollectionReference<BlogModel>;
    const res = (await getDocs(query(blogsRef,orderBy('timeStamp','desc'),limit(12)))).docs.map((doc)=>doc.data())
    // const res = (await getDocs(query(blogsRef))).docs.map((doc)=>doc.data())

    return res
  }

  const { status, data, error, isLoading } = useQuery(
    ['blogs', page],
    async () => {
      const res = await fetchBlogsToExplore()
      return res
    },
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: true,
      enabled: page > 0,
    }
  );

  return { status, data, error, isLoading };
};