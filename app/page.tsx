import { Search, ChevronDown } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

const RecentSubmissionItem = ({ item }: { item: any }) => (
  <div className="flex items-start space-x-4 py-4">
    <div className="w-24 h-24 bg-light-gray flex items-center justify-center text-center text-sm text-gray-500">
      No Thumbnail Available
    </div>
    <div className="flex-1">
      <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full">Item</span>
      <Link href={`/items/${item.id}`}>
        <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer mt-1">
          {item.title}
        </h3>
      </Link>
      <p className="text-sm text-gray-600 mt-1">
        by {item.submitter.name} | In: <Link href={`/collections/${item.collection.id}`} className="text-blue-600 hover:underline">{item.collection.name}</Link>
      </p>
      <button className="flex items-center text-sm text-blue-600 hover:underline mt-2">
        <ChevronDown size={16} className="mr-1" />
        Show more
      </button>
    </div>
  </div>
);

export default async function Home() {
  const communities = await prisma.community.findMany({
    take: 5,
  });

  const recentItems = await prisma.item.findMany({
    take: 5,
    where: { status: 'PUBLISHED' },
    orderBy: { createdAt: 'desc' },
    include: {
      submitter: true,
      collection: true,
    },
  });

  return (
    <div className="">
      {/* Hero Section */}
      <div 
        className="relative py-16 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url(/banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light mb-4">Welcome to the Jigjiga University Repository</h1>
          <p className="max-w-3xl  mb-6">
            At the heart of advancing research and management at Jigjiga University, the Repository is dedicated to improving outcomes through the efficient collection
          </p>
          <div>
            <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
            <ul className="list-disc list-inside space-y-1 ">
              <li><strong>Comprehensive Data Repositories:</strong> The repository houses valuable health data, including public h</li>
              <li><strong>Research Publications:</strong> Access to research outputs and scholarly articles to advance kn</li>
              <li><strong>Visualization Tools:</strong> Interactive dashboards and visual tools to explore health trends a</li>
              <li><strong>Open Access:</strong> We believe in transparency and open access to data, empowering rese</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <form action="/search" method="GET">
            <div className="flex">
              <input 
                type="text" 
                name="q"
                placeholder="Search the repository ..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className=" px-6 py-2 rounded-r-md flex items-center bg-gray-700 text-white hover:bg-gray-800">
                <Search size={20} className="mr-2" />
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Datasets Community Section */}
        <div className="mb-12 px-20 py-8 border-t border-b border-gray-200">
          <h2 className="text-3xl font-light mb-2">Communities</h2>
          <p className="text-gray-600 mb-4">Browse the communities in the repository.</p>
          <div className="space-y-4">
            {communities.map((community) => (
              <div key={community.id}>
                <Link href={`/communities/${community.id}`}>
                  <h3 className="text-xl text-blue-600 hover:underline cursor-pointer">{community.name}</h3>
                </Link>
                <p className="text-gray-700">{community.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Submissions Section */}
       <div className="mb-12 px-20 ">
          <h2 className="text-3xl font-light mb-2">Recent Submissions</h2>
          <div className="divide-y divide-gray-200">
            {recentItems.map((item) => (
              <RecentSubmissionItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Load more ...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}