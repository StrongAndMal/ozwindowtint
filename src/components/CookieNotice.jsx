import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CookieNotice = () => {
  const [showNotice, setShowNotice] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      setShowNotice(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: true,
      })
    );
    setShowNotice(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
      })
    );
    setShowNotice(false);
  };

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "custom");
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify(cookiePreferences)
    );
    setShowNotice(false);
    setShowCustomize(false);
  };

  const handlePreferenceChange = (type) => {
    if (type === "necessary") return; // Necessary cookies can't be disabled

    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-border">
      <div className="max-w-4xl mx-auto">
        {!showCustomize ? (
          <Card className="bg-gradient-card border-border shadow-glass">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    🍪 We use cookies
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We use cookies to enhance your browsing experience, serve
                    personalized content, and analyze our traffic. By clicking
                    "Accept All", you consent to our use of cookies.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" size="sm" onClick={handleRejectAll}>
                    Reject All
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleCustomize}>
                    Customize
                  </Button>
                  <Button variant="cta" size="sm" onClick={handleAcceptAll}>
                    Accept All
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-gradient-card border-border shadow-glass">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    Cookie Preferences
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCustomize(false)}
                  >
                    ← Back
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">
                        Necessary Cookies
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Required for the website to function properly
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-start px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">
                        Analytics Cookies
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our
                        website
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange("analytics")}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                        cookiePreferences.analytics
                          ? "bg-primary justify-end"
                          : "bg-muted justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">
                        Marketing Cookies
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Used to deliver personalized advertisements
                      </div>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange("marketing")}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                        cookiePreferences.marketing
                          ? "bg-primary justify-end"
                          : "bg-muted justify-start"
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                    </button>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" size="sm" onClick={handleRejectAll}>
                    Reject All
                  </Button>
                  <Button
                    variant="cta"
                    size="sm"
                    onClick={handleSavePreferences}
                  >
                    Save Preferences
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CookieNotice;
