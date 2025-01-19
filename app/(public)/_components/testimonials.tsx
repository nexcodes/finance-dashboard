import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "This finance app has completely transformed how I manage my money. The insights are invaluable.",
    author: "Sarah Johnson",
    role: "Small Business Owner",
    rating: 5,
  },
  {
    content:
      "The best financial management tool I've ever used. Simple yet powerful.",
    author: "Michael Chen",
    role: "Freelancer",
    rating: 5,
  },
  {
    content:
      "Finally, a finance app that makes sense! The interface is beautiful and intuitive.",
    author: "Emma Williams",
    role: "Product Manager",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-blue-50/50 p-4">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Loved by thousands
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
            {`Don't just take our word for it — hear from some of our amazing
            customers`}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg transform -rotate-2 group-hover:rotate-0 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
