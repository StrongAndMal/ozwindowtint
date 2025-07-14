import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    additionalDetails: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.serviceType)
      newErrors.serviceType = "Please select a service type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      additionalDetails: "",
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-10">
        <div className="text-center mb-10">
          <h2 className="text-6xl font-bold mb-4 text-foreground">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to book? Got a question? We're here to help.
          </p>
          <p className="text-sm text-white/80 pt-2 max-w-3xl mx-auto">
            Fill out the form below and we’ll get back to you ASAP.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="border-none bg-white/10 backdrop-blur-sm shadow-none ">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Service Type & Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="serviceType"
                      placeholder="Please select"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Service Type *
                    </label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) =>
                        handleInputChange("serviceType", value)
                      }
                    >
                      <SelectTrigger
                        className={`bg-white/20 border-none text-white/80 px-4 py-3 ${
                          errors.serviceType ? "border-red-400" : ""
                        }`}
                      >
                        <SelectValue
                          placeholder="Please select"
                          className="px-0"
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-none py-2 px-4">
                        <SelectItem
                          value="automotive"
                          className="text-white px-0 py-3 my-1 transition-all duration-150 lg:hover:bg-white/10 cursor-pointer"
                        >
                          Nano Carbon Puremax Automotive Tint
                        </SelectItem>
                        <SelectItem
                          value="residential"
                          className="text-white px-0 py-3 my-1 transition-all duration-150 lg:hover:bg-white/10 cursor-pointer"
                        >
                          FXtreme2 Series – Nano Ceramic Film Automotive Tint
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.serviceType && (
                      <p className="text-red-300 text-sm mt-1">
                        {errors.serviceType}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className={`bg-white/20 text-white placeholder:text-white/60 px-4 py-3 ${
                        errors.name ? "border-red-400" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-300 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                </div>
                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`bg-white/20  text-white placeholder:text-white/60 px-4 py-3 ${
                        errors.email ? "border-red-400" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-300 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Phone Number (Optional) *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="bg-white/20  text-white placeholder:text-white/60 px-4 py-3"
                    />
                  </div>
                </div>
                {/* Row 3: Message/Details */}
                <div>
                  <label
                    htmlFor="additionalDetails"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Additional Details
                  </label>
                  <Textarea
                    id="additionalDetails"
                    placeholder="Tell us more about your preffered tint, what vehicle you have, and any other details you think are relevant..."
                    value={formData.additionalDetails}
                    onChange={(e) =>
                      handleInputChange("additionalDetails", e.target.value)
                    }
                    rows={4}
                    className="bg-white/20 text-white placeholder:text-white/60 px-4 py-3"
                  />
                </div>
                {/* Submit Button */}
                <div className="text-center pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="px-12 hover:scale-105 transition-all duration-300 py-4 text-lg bg-white text-gray-900  font-semibold"
                  >
                    Get My Free Quote
                  </Button>
                  <p className="text-sm text-white/80 mt-4">
                    We typically respond within 2-4 hours during business hours
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
