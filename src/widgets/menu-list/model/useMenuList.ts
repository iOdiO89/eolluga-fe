import { getStoreInfo } from "@/entities";
import { useQuery } from "@tanstack/react-query";

const useMenuList = (storeId: number) => {
  const { data, isPending, isSuccess } = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => getStoreInfo(storeId),
  });
  const menuList = data?.menuList;
  const categories = Array.from(
    new Set(menuList?.map((menu) => menu.category))
  );

  return { menuList, categories, isPending, isSuccess };
};

export default useMenuList;