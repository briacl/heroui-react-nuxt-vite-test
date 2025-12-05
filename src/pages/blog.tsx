import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useState } from "react";
import { Button } from "@heroui/button";
import {Input} from "@heroui/input";
import {Checkbox} from "@heroui/checkbox";


export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  function buttonClick() {
  console.log("Button clicked!");
  setIsVisible(!isVisible);
  }

  function getButtonLabel() {
    if (isVisible) {
      return "Hide Message";
    }
    return "Show Message";
  }

  function getMessage() {
    if (isVisible) {
      return submittedEmail ? `Submitted email: ${submittedEmail}` : "Hello, welcome to the blog page!";
    }
    return "";
  }
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Blogaa</h1>
          <div className="flex p-5 w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            />
          </div>
          <div className="flex gap-2 justify-center mt-2">
            <Button onPress={() => { setSubmittedEmail(email); console.log('Email submitted:', email); }}>
              Envoyer
            </Button>
            <Button onPress={buttonClick}>
              {getButtonLabel()}
            </Button>
          </div>
          {isVisible && <p className="mt-4">{getMessage()}</p>}
          
          <label>
            <Checkbox defaultSelected>Terms and Conditions</Checkbox>
          </label>
        </div>
      </section>
    </DefaultLayout>
  );
}
