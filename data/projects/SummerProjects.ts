import { STUDENT_ID } from 'types/People.type';
import { ProjectInfo, PROJECT_ID, PROJECT_TYPE } from 'types/Project.type';
import { HackProjects } from './HackProjects';
import { StartupProjects } from './StartupProjects';

export const getProjectInfoById = (projectId: PROJECT_ID): ProjectInfo => {
  let summerProject = SummerProjects.find((p) => p.id === projectId);
  if (summerProject) {
    return summerProject;
  }
  let startupProject = StartupProjects.find((p) => p.id === projectId);
  if (startupProject) {
    return startupProject;
  }
  let hackProject = HackProjects.find((p) => p.id === projectId);
  // The project id will correspond to exactly one of Summer, Startup, or Hack projects
  return hackProject!;
};

export const SummerProjects: ProjectInfo[] = [
  {
    id: PROJECT_ID.THUNDER_LIZARD_NFT,
    projectType: PROJECT_TYPE.SUMMER,
    projectName: 'Thunder Lizard NFT',
    builders: [STUDENT_ID.JOYCE_JIANG],
    oneLiner:
      'NFT representing the incredible builders in the Outliers program',
    mainImage: '/projects/thunderLizardNFT/ThunderLizardMainImage.png',
    description:
      'Outliers is a 10-week, summer program to empower exceptional student builders in Crypto and Web3. Through curriculum and technical projects, Outliers equips students from across the country with the resources, knowledge, and community necessary to build and scale a successful Web3 venture.',
    projectLink: 'https://outliersnft.xyz/',
    coverImage: '/projects/thunderLizardNFT/ThunderLizardCoverImage.gif',
  },
  {
    id: PROJECT_ID.THUNDER_LIZARD_NFT,
    projectType: PROJECT_TYPE.SUMMER,
    projectName: 'Thunder Lizard NFT',
    builders: [STUDENT_ID.JOYCE_JIANG],
    oneLiner:
      'NFT representing the incredible builders in the Outliers program',
    mainImage: '/projects/thunderLizardNFT/ThunderLizardMainImage.png',
    description:
      'Outliers is a 10-week, summer program to empower exceptional student builders in Crypto and Web3. Through curriculum and technical projects, Outliers equips students from across the country with the resources, knowledge, and community necessary to build and scale a successful Web3 venture.',
    projectLink: 'https://outliersnft.xyz/',
    coverImage: '/projects/thunderLizardNFT/ThunderLizardCoverImage.gif',
  },
  {
    id: PROJECT_ID.THUNDER_LIZARD_NFT,
    projectType: PROJECT_TYPE.SUMMER,
    projectName: 'Thunder Lizard NFT',
    builders: [STUDENT_ID.JOYCE_JIANG],
    oneLiner:
      'NFT representing the incredible builders in the Outliers program',
    mainImage: '/projects/thunderLizardNFT/ThunderLizardMainImage.png',
    description:
      'Outliers is a 10-week, summer program to empower exceptional student builders in Crypto and Web3. Through curriculum and technical projects, Outliers equips students from across the country with the resources, knowledge, and community necessary to build and scale a successful Web3 venture.',
    projectLink: 'https://outliersnft.xyz/',
    coverImage: '/projects/thunderLizardNFT/ThunderLizardCoverImage.gif',
  },
  {
    id: PROJECT_ID.THUNDER_LIZARD_NFT,
    projectType: PROJECT_TYPE.SUMMER,
    projectName: 'Thunder Lizard NFT',
    builders: [STUDENT_ID.JOYCE_JIANG],
    oneLiner:
      'NFT representing the incredible builders in the Outliers program',
    mainImage: '/projects/thunderLizardNFT/ThunderLizardMainImage.png',
    description:
      'Outliers is a 10-week, summer program to empower exceptional student builders in Crypto and Web3. Through curriculum and technical projects, Outliers equips students from across the country with the resources, knowledge, and community necessary to build and scale a successful Web3 venture.',
    projectLink: 'https://outliersnft.xyz/',
    coverImage: '/projects/thunderLizardNFT/ThunderLizardCoverImage.gif',
  },
  {
    id: PROJECT_ID.THUNDER_LIZARD_NFT,
    projectType: PROJECT_TYPE.SUMMER,
    projectName: 'Thunder Lizard NFT',
    builders: [STUDENT_ID.JOYCE_JIANG],
    oneLiner:
      'NFT representing the incredible builders in the Outliers program',
    mainImage: '/projects/thunderLizardNFT/ThunderLizardMainImage.png',
    description:
      'Outliers is a 10-week, summer program to empower exceptional student builders in Crypto and Web3. Through curriculum and technical projects, Outliers equips students from across the country with the resources, knowledge, and community necessary to build and scale a successful Web3 venture.',
    projectLink: 'https://outliersnft.xyz/',
    coverImage: '/projects/thunderLizardNFT/ThunderLizardCoverImage.gif',
  },
  {
    id: PROJECT_ID.THUNDER_LIZARD_NFT,
    projectType: PROJECT_TYPE.SUMMER,
    projectName: 'Thunder Lizard NFT',
    builders: [STUDENT_ID.JOYCE_JIANG],
    oneLiner:
      'NFT representing the incredible builders in the Outliers program',
    mainImage: '/projects/thunderLizardNFT/ThunderLizardMainImage.png',
    description:
      'Outliers is a 10-week, summer program to empower exceptional student builders in Crypto and Web3. Through curriculum and technical projects, Outliers equips students from across the country with the resources, knowledge, and community necessary to build and scale a successful Web3 venture.',
    projectLink: 'https://outliersnft.xyz/',
    coverImage: '/projects/thunderLizardNFT/ThunderLizardCoverImage.gif',
  },
];
