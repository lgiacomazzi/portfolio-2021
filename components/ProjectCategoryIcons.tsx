type ProjectCategoryProps = {
  category: [string];
};
export default function ProjectCategoryIcons({
  category,
}: ProjectCategoryProps) {
  return <div>{category}</div>;
}
