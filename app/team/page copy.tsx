import AllVariants from "@/components/usage/all-variants";
import CallToAction from "@/components/usage/call-to-action";
import Copy from "@/components/usage/copy";
import Intro from "@/components/usage/intro";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  const faqs = [
    {
      id: 1,
      question: "Why Use Variant Vault?",
      answer:
        "Variant Vault contains ready to use animations & variants for your next project. These are production-ready and can be used in any of your apps.",
    },
    {
      id: 2,
      question: "Why Framer Motion?",
      answer:
        "Framer Motion is one of the most popular animation libraries for React with an average of 2M+ weekly downloads on NPM. It's easy to use and has a great API.",
    },
    {
      id: 3,
      question: "Do I need to pay to use Variant Vault?",
      answer:
        "No!!! It's completely free to use. You can copy and paste the code into your own project.",
    },
    {
      id: 4,
      question: "Can I use Variant Vault in my commercial projects?",
      answer:
        "Yes! You can use Variant Vault in your personal and commercial projects.",
    },
    {
      id: 5,
      question: "Do I need to give credit to Variant Vault?",
      answer:
        "No, you don't need to give credit to Variant Vault. However, if you want to, you can link to Variant Vault on Twitter @abdo_eth.",
    },

    // More questions...
  ];
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <Card className=" bg-gray-800 shadow-2xl lg:p-10  bg-cover relative z-0 rounded-lg transition-all duration-300 hover:scale-105">
              <img src="final1.jpg"></img>
                <CardHeader className="flex flex-row items-center justify-between space-y-1 pb-2">
                  <CardTitle className="lg:text-4xl text-2xl  font-bold text-red-800">GEN AI</CardTitle>
                </CardHeader>
                <CardContent className="')]" >
                  <div className="text-xl  font-bold"> Event</div>
                  <p className="text-lg text-muted-foreground">

                  </p>
                  <div className="h-[79px]">

                  </div>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
