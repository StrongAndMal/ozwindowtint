import GoogleReviewsWidget from "google-reviews-widget";

const Reviews = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-6xl font-bold mb-6 text-foreground">
            Local Voices. Honest Feedback.
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience.
          </p>
        </div>

        {/* Google Reviews Widget - Full Width */}
        <div className="w-full max-w-7xl mx-auto">
          <GoogleReviewsWidget
            instanceId="wm9bG5GYm0ninbFH8TO1"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
