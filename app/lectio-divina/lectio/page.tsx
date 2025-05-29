import BiblePassage from "@/components/BiblePassage";
import LectioContent from "./LectioContent";

export default function LectioStep() {
  return <LectioContent biblePassageComponent={<BiblePassage />} />;
}
