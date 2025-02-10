
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
           <Navbar title="TextUtils"  aboutText="About us"/>
           <div className="container my-3">
           <TextForm heading="Enter the text to analyze"/>
           </div>
    </>
  );
}

export default App;
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Tabs, Tab } from "@/components/ui/tabs";

// export default function GoalTrackerApp() {
//   const [goals, setGoals] = useState([]);
//   const [activeGoals, setActiveGoals] = useState([]);
//   const [completedGoals, setCompletedGoals] = useState([]);
//   const [newGoal, setNewGoal] = useState({ name: "", category: "", date: "" });

//   const addGoal = () => {
//     if (newGoal.name) {
//       setGoals([...goals, newGoal]);
//       setNewGoal({ name: "", category: "", date: "" });
//     }
//   };

//   const startGoal = (index) => {
//     const goal = goals[index];
//     goal.startDate = new Date().toISOString().split("T")[0];
//     setActiveGoals([...activeGoals, goal]);
//     setGoals(goals.filter((_, i) => i !== index));
//   };

//   const completeGoal = (index, budget, experience, photo) => {
//     const goal = activeGoals[index];
//     goal.endDate = new Date().toISOString().split("T")[0];
//     goal.budget = budget;
//     goal.experience = experience;
//     goal.photo = photo;
//     setCompletedGoals([...completedGoals, goal]);
//     setActiveGoals(activeGoals.filter((_, i) => i !== index));
//   };

//   const deleteGoal = (index) => {
//     setGoals(goals.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-4">
//       <Tabs>
//         <Tab label="Home">
//           <div className="grid gap-4">
//             {goals.map((goal, index) => (
//               <Card key={index}>
//                 <CardContent>
//                   <p>{goal.name} ({goal.category})</p>
//                   <Button onClick={() => startGoal(index)}>Start</Button>
//                   <Button onClick={() => deleteGoal(index)}>Delete</Button>
//                 </CardContent>
//               </Card>
//             ))}
//             <Button onClick={addGoal}>+ Add Goal</Button>
//           </div>
//         </Tab>
//         <Tab label="Active Goals">
//           <div className="grid gap-4">
//             {activeGoals.map((goal, index) => (
//               <Card key={index}>
//                 <CardContent>
//                   <p>{goal.name} ({goal.category})</p>
//                   <Button onClick={() => completeGoal(index, 100, "Great experience!", "image.jpg")}>
//                     Complete
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </Tab>
//         <Tab label="Completed Goals">
//           <div className="grid gap-4">
//             {completedGoals.map((goal, index) => (
//               <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//                 <Card>
//                   <CardContent>
//                     <p>{goal.name} ({goal.category})</p>
//                     <p>Budget: {goal.budget}</p>
//                     <p>Experience: {goal.experience}</p>
//                     <img src={goal.photo} alt="Goal" className="w-full h-32 object-cover" />
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </Tab>
//       </Tabs>
//     </div>
//   );
// }

