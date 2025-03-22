export interface Plant {
  commonName: string;
  scientificName: string;
  ayushClassifications: string[];
  shortDescription: string;
  imageUrl: string;
  
  history: {
    period: string;
    description: string;
  }[];
  
  benefits: {
    title: string;
    description: string;
    source: string;
  }[];
  
  compounds: {
    name: string;
    effects: string;
    researchStatus: 'Well-established' | 'Emerging' | 'Theoretical';
  }[];
  
  recipes: {
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
  }[];
  
  quiz: {
    question: string;
    answers: string[];
    correctAnswer: number;
  }[];
  
  communityDiscussions: {
    user: string;
    date: string;
    topic: string;
    message: string;
  }[];
}