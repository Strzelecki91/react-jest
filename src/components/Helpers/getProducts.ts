export const getProduct = async (id: string) => {
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  if (!data.ok) throw new Error("something wrong");
  const dataJson = await data.json();
  return dataJson.title;
};
