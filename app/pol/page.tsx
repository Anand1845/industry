import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <Image
            src="/lp1.jpeg"
            alt="Product One"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-3">PS-100</h2>
          <Link href="/polh">
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              View Product
            </button>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <Image
            src="/lp2.jpeg"
            alt="Product Two"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-3">PS-100-V</h2>
          <Link href="/polhv">
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              View Product
            </button>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <Image
            src="/lp.jpeg"
            alt="Product Three"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-3">PS-100-STP</h2>
          <Link href="/polhs">
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              View Product
            </button>
          </Link>
        </div>

          {/* Card 4 */}
         <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <Image
            src="/lp4.jpeg"
            alt="Product Three"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-3">PS-100-STP-V</h2>
          <Link href="/polhsv">
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              View Product
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}