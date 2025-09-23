import React from 'react';
import { Star } from 'lucide-react';

interface Review {
    id: number;
    name: string;
    date: string;
    rating: number;
    review: string;
    isLong?: boolean;
}


const Testimonials: React.FC = () => {

    const topRowReviews: Review[] = [
        {
            id: 1,
            name: "Brooke",
            date: "9/16/2025",
            rating: 5,
            review: "So easy!! So easy and quick and explains it all so well."
        },
        {
            id: 2,
            name: "Lisa Stamper",
            date: "9/16/2025",
            rating: 5,
            review: "We had a billing issue in regard to our renewal and Alex I. took care of it asap. Really appreciated his prompt and efficient response :)"
        },
        {
            id: 3,
            name: "customerteresa Garcia",
            date: "9/16/2025",
            rating: 5,
            review: "Andy G has been helpful during this process. Thank you Andy, your great"
        },
        {
            id: 4,
            name: "SuperMom",
            date: "9/15/2025",
            rating: 5,
            review: "...just helped solve my issue! no problem"
        },
        {
            id: 5,
            name: "customer",
            date: "9/14/2025",
            rating: 5,
            review: "Easy to do business. Easy to do business. Very service-level you and connection to people that can help."
        }
    ];


    // Second row of reviews (moving right to left)
    const bottomRowReviews: Review[] = [
        {
            id: 6,
            name: "Russ",
            date: "9/12/2025",
            rating: 4,
            review: "I love Bizee! Mario Z was quick, helpful & professional"
        },
        {
            id: 7,
            name: "Юрий Каличёв",
            date: "9/12/2025",
            rating: 5,
            review: "We are working with Bizee (incfile before) over 2 years. Great service and price"
        },
        {
            id: 8,
            name: "Philomena",
            date: "9/11/2025",
            rating: 5,
            review: "REGISTRATION AND APPROVAL PROCESS - Your questions are simple and direct. The forms simple and easy to fill. Your prompts make the entire filing process of the forms very easy. I believe this makes the time frame for getting results or approvals faster",
            isLong: true
        },
        {
            id: 9,
            name: "Beyond Blaze LLC",
            date: "9/10/2025",
            rating: 5,
            review: "You made things simple as expected! You made things simple and I would recommend to everyone interested in starting up the good or great opportunities."
        },
        {
            id: 10,
            name: "jacque schwartz",
            date: "9/9/2025",
            rating: 5,
            review: "Sapphire Gimmeay"
        }
    ];


    const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    className={`w-4 h-4 ${index < rating ? 'text-green-500 fill-current' : 'text-gray-300'
                        }`}
                />
            ))}
        </div>
    );

    const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
        <div className={`bg-white rounded-lg shadow-sm border border-gray-100 p-4 mx-3 flex-shrink-0 ${review.isLong ? 'w-80' : 'w-72'
            }`}>
            <div className="flex items-center justify-between mb-3">
                <StarRating rating={review.rating} />
                <span className="text-xs text-gray-500">{review.date}</span>
            </div>

            <p className="text-sm text-gray-700 mb-3 leading-relaxed line-clamp-4">
                {review.review}
            </p>

            <p className="text-sm font-medium text-[#0F395D]">{review.name}</p>
        </div>
    );
    return (
        <>
            <div className="bg-gray-50 py-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 mb-12">
                    <h2 className="text-3xl font-bold text-center text-[#0F395D] mb-2">
                        What Our Customers Say
                    </h2>
                    <p className="text-center text-gray-600">
                        Join thousands of satisfied business owners who trust Bizee
                    </p>
                </div>

                {/* First Marquee Row - Left to Right */}
                <div className="relative mb-8">
                    <div className="flex animate-marquee-left">
                        {/* First set of reviews */}
                        {topRowReviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                        {/* Duplicate for seamless loop */}
                        {topRowReviews.map((review) => (
                            <ReviewCard key={`${review.id}-duplicate`} review={review} />
                        ))}
                    </div>
                </div>

                {/* Second Marquee Row - Right to Left */}
                <div className="relative">
                    <div className="flex animate-marquee-right">
                        {/* First set of reviews */}
                        {bottomRowReviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                        {/* Duplicate for seamless loop */}
                        {bottomRowReviews.map((review) => (
                            <ReviewCard key={`${review.id}-duplicate`} review={review} />
                        ))}
                    </div>
                </div>

                <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Pause animation on hover */
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
            </div>
        </>
    )
}

export default Testimonials;
