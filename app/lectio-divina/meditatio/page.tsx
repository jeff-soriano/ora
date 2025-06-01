import BiblePassage from "@/components/BiblePassage";
import MeditatioContent from "./MeditatioContent";

export default function MeditatioStep() {
  return <MeditatioContent biblePassageComponent={<BiblePassage />} />;
}
