import { leistungenData } from '@/data/leistungenData';
import { notFound } from 'next/navigation';
import SubcategoryDetailPageContent from '@/components/pages/SubcategoryDetailPageContent';

export async function generateMetadata({ params }) {
  const { categorySlug, subcategorySlug } = await params;
  const category = leistungenData.find((c) => c.slug === categorySlug);
  if (!category) return {};
  const subcategory = category.subcategories.find((s) => s.slug === subcategorySlug);
  if (!subcategory) return {};
  return {
    title: `${subcategory.name} | ${category.name} | Cesar Dienstleistungen`,
    description: subcategory.description,
  };
}

export async function generateStaticParams() {
  const params = [];
  leistungenData.forEach((category) => {
    category.subcategories.forEach((sub) => {
      params.push({ categorySlug: category.slug, subcategorySlug: sub.slug });
    });
  });
  return params;
}

export default async function SubcategoryDetailPage({ params }) {
  const { categorySlug, subcategorySlug } = await params;
  const category = leistungenData.find((c) => c.slug === categorySlug);
  if (!category) notFound();
  const subcategory = category.subcategories.find((s) => s.slug === subcategorySlug);
  if (!subcategory) notFound();
  return <SubcategoryDetailPageContent category={category} subcategory={subcategory} />;
}
