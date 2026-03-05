import { JSX } from "react";
import YourScore from "./YourScore";
import Conclusions from "./Conclusion";

export const reportSections: Record<string, JSX.Element> = {
  YourScore: <YourScore/>,
  Conclusion : <Conclusions/>
};
