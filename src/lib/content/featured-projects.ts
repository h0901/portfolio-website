import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Animal Encroachment Detection',
      description:
        'An intrusion detection system that uses surveillance cameras to monitor farms, detect animals or humans, and alert farmers in case of an encroachment.',
      tasks:
        'Developed an animal encroachment detection system using surveillance cameras to monitor farms. The system detects motion, then applies object detection using CNN to classify the object as either an animal or a human. Utilized data augmentation to enhance model performance, and implemented night vision enhancement to ensure functionality in low-light conditions. Alerts are sent to the farmer in case of intrusion.',
      url: 'https://github.com/h0901/animalEnc',
      img: '/project-pics/animalEnc.jpg',
      tags: [
        'CNN',
        'Object Detection',
        'Motion Detection',
        'Data Augmentation',
        'Night Vision',
        'Python',
        'OpenCV',
      ],
    },
    {
      id: getId(),
      name: 'Euphonia',
      description:
        'A music recommendation system that uses facial detection to determine your mood and plays songs based on your emotional state.',
      tasks:
        "Developed Euphonia, a music recommendation system that uses facial detection to analyze the user's mood and classifies it into categories such as happy, sad, angry, etc. Based on the classification, the system recommends songs that match the user’s emotional state. Integrated machine learning models for mood classification and real-time song recommendations.",
      url: 'https://github.com/h0901/euphonia',
      img: '/project-pics/euphonia.jpg',
      tags: [
        'Facial Recognition',
        'ML Classification',
        'Python',
        'OpenCV',
        'TensorFlow',
        'Music Recommendation',
      ],
    },
    {
      id: getId(),
      name: 'Receiptaurant',
      description:
        'A platform that helps users manage receipts by comparing surcharges at various restaurants, with integrated map features and a focus on user privacy and security.',
      tasks:
        'Developed a receipt management system where users can view surcharges on their bills, compare them across different restaurants, and choose where to dine based on surcharge rates. Integrated Google Maps API for location features and incorporated generative AI LLM to enhance user experience. Emphasized strong security protocols to ensure user privacy and bill confidentiality.',
      url: 'https://github.com/h0901/receiptaurant',
      img: '/project-pics/receiptaurant.png',
      tags: [
        'Google Maps API',
        'Generative AI',
        'Security',
        'React',
        'NodeJS',
        'TypeScript',
      ],
    },
    {
      id: getId(),
      name: 'Android Malware Detection',
      description:
        'An Android malware detection system using Genetic Algorithms for feature selection and classification with Logistic Regression, KNN, and SVM.',
      tasks:
        'Developed a machine learning model to detect malware in Android applications by using Genetic Algorithms for feature selection. Implemented multiple classification algorithms including Logistic Regression, KNN, and SVM to evaluate and enhance the accuracy of malware detection.',
      url: 'https://github.com/h0901/androidMalwareDetection',
      img: '/project-pics/androidMalware.png',
      tags: [
        'Android',
        'Machine Learning',
        'Genetic Algorithm',
        'Logistic Regression',
        'KNN',
        'SVM',
        'Python',
        'TensorFlow',
      ],
    },
  ],
};

export default featuredProjectsSection;
