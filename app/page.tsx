import Link from 'next/link';
import Image from 'next/image';
import { getBlogViews, getTweetCount, getStarCount } from 'lib/metrics';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  let starCount, views, tweetCount;

  try {
    [starCount, views, tweetCount] = await Promise.all([
      getStarCount(),
      getBlogViews(),
      getTweetCount(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Abhinav</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        Hey, I'm Abhinav. I'm learning how to develop <b>websites.</b> I also love drawing art in my free time. Cricket is my Favorite Hobby.
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt="Abhinav"
          className="rounded-full grayscale"
          src="https://wallpapercave.com/wp/wp4925954.jpg"
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jujutsugod"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            {`${starCount.toLocaleString()} stars on this repo`}
          </a>
        </div>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/aboonav"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
