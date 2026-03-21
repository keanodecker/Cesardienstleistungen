import { leistungenData } from '@/data/leistungenData';
import { notFound } from 'next/navigation';
import CategoryDetailPageContent from '@/components/pages/CategoryDetailPageContent';

export async function generateMetadata({ params }) {
  const { categorySlug } = await params;
  const category = leistungenData.find((c) => c.slug === categorySlug);
  if (!category) return {};
  return {
    title: `${category.name} | Cesar Dienstleistungen`,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return leistungenData.map((c) => ({ categorySlug: c.slug }));
}

export default async function CategoryDetailPage({ params }) {
  const { categorySlug } = await params;
  const category = leistungenData.find((c) => c.slug === categorySlug);
  if (!category) notFound();
  return <CategoryDetailPageContent category={category} />;
}
