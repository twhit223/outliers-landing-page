import { FC } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { TheMentorsInfos } from '../../data/people/TheMentorsInfo';

const ImageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const TitleVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
};

const NameVariants: Variants = {
  initial: {
    scale: 1,
    color: 'var(--off-black)',
  },
  hover: {
    scale: 1.025,
    color: 'var(--floodgate)',
  },
};

export const TheMentors: FC = () => {
  return (
    <div>
      <h1 className="title-header">
        The Mentors{' '}
        <motion.span
          variants={TitleVariants}
          initial="initial"
          animate="animate"
          className="text-floodgate tablet:text-3xl"
        >
          (A.K.A Legends)
        </motion.span>
      </h1>
      <div className="flex flex-row justify-between gap-x-5 tablet:flex-col tablet:gap-y-20">
        {TheMentorsInfos.map(
          ({ profileImageURL, name, company, bio, twitterHandle }) => {
            return (
              <motion.div
                initial="initial"
                whileHover="hover"
                key={twitterHandle}
                className="w-80 tablet:w-full tablet:border-2 tablet:py-5 tablet:px-6"
              >
                <div className="tablet:flex tablet:flex-row tablet:items-center tablet:gap-x-5">
                  <div className="relative h-96 w-full tablet:h-20 tablet:w-20">
                    <Image
                      priority
                      src={profileImageURL}
                      alt="profile"
                      fill
                      className="border-4 border-off-black object-cover object-top grayscale transition-all hover:grayscale-0 tablet:border-2"
                    />
                  </div>
                  <div>
                    <motion.a
                      href={`https://twitter.com/${twitterHandle}`}
                      target="_blank"
                      rel="noreferrer"
                      variants={NameVariants}
                      className="mt-5 inline-block text-2xl font-bold underline tablet:mt-0"
                    >
                      {name}
                    </motion.a>
                    <p className="mt-0 text-base font-bold">{company}</p>
                  </div>
                </div>

                <p className="mt-5 text-lg tablet:mt-7 tablet:text-xl">{bio}</p>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
};
