import { fontList } from "@/fonts";
import ViewFont from "@/components/ViewFont";

export const generateStaticParams = async () => {
  // const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }));

  const paths = Object.keys(fontList).map((key, index) => ({ slug: key }));

  return paths;
};

export default function ViewFontPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <ViewFont slug={params.slug} />
    </>
  );
}
