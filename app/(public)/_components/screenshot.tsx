import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-24 p-8">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Beautiful interface, powerful features
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
            See how our platform helps you manage your finances with ease
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="group relative">
              <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-xl rounded-3xl transform rotate-3 group-hover:rotate-2 transition-transform" />
              <Card className="relative transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-4">
                  <Image
                    src="/images/transactions.png"
                    alt="Transaction history interface showing detailed financial records"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Detailed Transaction History
                      </h3>
                      <p className="mt-2 text-gray-600">
                        Track every transaction with detailed information
                      </p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-blue-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <div className="group relative">
              <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-xl rounded-3xl transform -rotate-3 group-hover:-rotate-2 transition-transform" />
              <Card className="relative transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-4">
                  <Image
                    src="/images/categories.png"
                    alt="Category management interface showing expense categories"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Smart Category Management
                      </h3>
                      <p className="mt-2 text-gray-600">
                        Organize your expenses with customizable categories
                      </p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-blue-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
