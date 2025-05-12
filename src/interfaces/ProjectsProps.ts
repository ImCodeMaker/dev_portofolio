// First, let's fix the ProjectsProps interface
import { StaticImageData } from 'next/image';
import { LinkProps } from 'next/link';

export default interface ProjectsProps {
  name: string;
  image: StaticImageData;
  pageLink?: LinkProps['href']
}