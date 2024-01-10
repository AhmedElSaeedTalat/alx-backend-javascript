interface MajorCredits {
  credits: number,
  _majorCredits: never
}
interface MinorCredits {
  credits: number,
  _minorCredits: never
}
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
   return {credits: subject1.credits + subject2.credits} as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
   return {credits: subject1.credits + subject2.credits} as MinorCredits;
}
